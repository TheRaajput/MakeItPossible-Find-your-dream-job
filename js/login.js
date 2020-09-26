//*******************************Firebase Config****************************************************//
var firebaseConfig = {
    apiKey: "AIzaSyCFa5UC-_9ZG9dfjC2eJ5t7RwIYjgx_020",
    authDomain: "makeitpossible.firebaseapp.com",
    databaseURL: "https://makeitpossible.firebaseio.com",
    projectId: "makeitpossible",
    storageBucket: "makeitpossible.appspot.com",
    messagingSenderId: "1054008310742",
    appId: "1:1054008310742:web:5965cfe86b8eba342f0277",
    measurementId: "G-W0N1Q8MJ64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
//..............................Variables..............................//

let getEmail = document.getElementById("getEmail").value;
let getPass = document.getElementById("getPass").value;

let enterEmail = document.getElementById("enterMail").value;
let enterPass = document.getElementById("enterPass").value;

//..................................Login Auth..........................//

function toMain(){
    if (enterEmail != null && enterPass != null)
    {
        const intoMain = auth.signInWithEmailAndPassword(enterEmail,enterPass);
        intoMain.catch(e=> alert(e.message));
        window.location.href = "main.html"
    }
    else {
        alert("Error");
    }
}

//..................................Sign Up Auth........................//
function signup(){

    if (getEmail == null)
    {
        alert("Enter Email!");
    }
    else if (getPass == null)
    {
        alert("Enter Password");
    }
    else
    {
        const promise = auth.createUserWithEmailAndPassword(getEmail, getPass);
        promise.catch(e=> alert(e.message));
        alert("Signed Up");
    }
}

