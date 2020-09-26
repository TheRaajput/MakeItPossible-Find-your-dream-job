let getstarted = document.getElementById("get_started");

function toregistration(){
    window.location.href = "login.html"
}


let logIn = document.getElementById("login");
let signIn = document.getElementById("register");
let btntoggle = document.getElementById("my-butn");

function login(){
    logIn.style.left = "50px"
    signIn.style.left = "450px"
    btntoggle.style.left = "0"
}

function register(){
    logIn.style.left = "-400px"
    signIn.style.left = "50px"
    btntoggle.style.left = "110px"
}

