from django.shortcuts import render
from login.models import *
from django.views.generic import View
from django.http import HttpResponse
import json
from django.contrib.auth import authenticate

# Create your views here.

def auth(request):
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('username')
    password = data.get('password')
    user =  authenticate(username=username, password=password)
    if user is not None:
        return HttpResponse("Correct")
    else:
        return HttpResponse("Wrong")
    # username = request.POST.get('username')
    # password = request.POST.get('password')
    # return HttpResponse(password)
    # return HttpResponse(json.dumps({"lat":"lat", "lng":"lng"}), content_type="application/json")

# class Login(View):
#     def auth(request):
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         return HttpResponse("Created!!", content_type='text/plain')
        # return render(request,self,{'message': "Created!!"})