import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/Link'
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

var username,password

// function getinput(typeinput) {
//   console.log(typeinput)
//   if(typeinput==='email'){
//     username = document.getElementById('email').innerText
//   }
//   else if(typeinput==='password'){
//     password = document.getElementById('password').innerText
//   }
// }

const Authenticate = () => {
  console.log("I am sending request")
  // var csrftoken = getCookie('csrftoken')
  let config = {headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    // 'axios.defaults.xsrfHeaderName': 'X-CSRFToken',
    // 'axios.defaults.xsrfCookieName': 'csrftoken',
    // 'axios.defaults.withCredentials': true
  }}
  let data = {
    username: username,
    password: password,
  }
  // data = JSON.stringify(data)
  axios.post('http://127.0.0.1:8000/auth',data,config).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <form> */}
      Email:<br /><input type="email" id="email" /*onchange={getinput('email')}*/></input><br/>
      Password:<br/><input type="password" id="password" /*onchange={getinput('password')}*/></input><br />
      <Link href="#"><a onClick={Authenticate}>Submit</a></Link>
      {/* <input type="submit" value="Submit" onClick={Authenticate}></input> */}
    {/* </form> */}

    {/* <p id="receivedmsg"></p> */}

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
