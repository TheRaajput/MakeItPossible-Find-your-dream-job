//.............Get Currently signed-in user.......................//
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.href = "main.html"
    } else {
      
    }
  });
//..................................Login Auth..........................//

function logIn(){
    var enterEmail = document.getElementById("enterMail").value;
    var enterPass = document.getElementById("enterPass").value;

    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
    });

    window.location.href = "main.html"
}


