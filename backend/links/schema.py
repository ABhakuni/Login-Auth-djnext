import graphene
from graphene_django import DjangoObjectType
from users.schema import UserType
from .models import Link, Vote
from graphql import GraphQLError
from django.db.models import Q

class LinkType(DjangoObjectType):
    class Meta:
        model = Link

class VoteType(DjangoObjectType):
    class Meta:
        model = Vote

class CreateLink(graphene.Mutation):
    id = graphene.Int()
    url = graphene.String()
    description = graphene.String()
    posted_by = graphene.Field(UserType)

    class Arguments:
        url = graphene.String()
        description = graphene.String()

    def mutate(self, info, url, description):
        user = info.context.user or None
        link = Link(url=url, description=description, posted_by=user)
        link.save()

        return CreateLink(
            id = link.id,
            url = link.url,
            description = link.description,
            posted_by = link.posted_by,
        )

class CreateVote(graphene.Mutation):
    user = graphene.Field(UserType)
    link = graphene.Field(LinkType)

    class Arguments:
        link_id = graphene.Int()

    def mutate(self, info, link_id):
        user = info.context.user or None
        if user.is_anonymous:
            raise GraphQLError('Login to Vote!')

        link = Link.objects.filter(id=link_id).first()
        if not link:
            raise Exception('Invalid Link!')

        Vote.objects.create(
            user=user,
            link=link,
        )

        return CreateVote(user=user, link=link)

class Mutation(graphene.ObjectType):
    create_link = CreateLink.Field()
    create_vote = CreateVote.Field()
    
class Query(graphene.ObjectType):
    links = graphene.List(LinkType, search=graphene.String(), first=graphene.Int(), skip=graphene.Int())
    votes = graphene.List(VoteType)

    def resolve_links(self, info, search=None, first=None, skip=None, **kwargs):
        stat = Link.objects.all()
        if search:
            filter = (
                Q(url__icontains=search) | Q(description__icontains=search)
            )
            stat = stat.filter(filter)

        if skip:
            stat = stat[skip:]
            
        if first:
            stat = stat[:first]

        return stat

    def resolve_votes(self, info, **kwargs):
        return Vote.objects.all()