//......................Get Started to registration.....................//
let getstarted = document.getElementById("get_started");

function toregistration(){
    window.location.href = "main.html"
}


//......................Toggle Var............................//
let logInbtn= document.getElementById("login-page");
let signIn = document.getElementById("register-page");
let btntoggle = document.getElementById("my-butn");
//......................Toggle Button...............................//
function loginToggle(){
    logInbtn.style.left = "50px"
    signIn.style.left = "450px"
    btntoggle.style.left = "0"
}

function registerToggle(){
    logInbtn.style.left = "-400px"
    signIn.style.left = "50px"
    btntoggle.style.left = "110px"
}





