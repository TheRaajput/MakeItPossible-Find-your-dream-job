//......................Navbar.................................//

const myNavbar = document.querySelector('#main-nav');
myNavbar.style.display = 'none'

//......................Form Box.........................//

const formBox = document.querySelector('#login-box');
formBox.style.display = 'block'

//....................main......................//

const mainBody  = document.querySelector('.body-main');
mainBody.style.display = 'none'
//...................Managing User....................//
auth.onAuthStateChanged(user => {
  if (user)
  {
    console.log('User logged in');
    formBox.style.display = 'none';
    myNavbar.style.display = 'block';
    mainBody.style.display = 'block'
  }
  else {
    console.log('Logged Out')
    myNavbar.style.display = 'none';
    formBox.style.display = 'block';
    mainBody.style.display = 'none';
  }
});

//...........................Create User...............................//
const registerForm = document.querySelector('#register-page');
registerForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //get user email and password
  const getEmail = registerForm['getEmail'].value;
  const getPass = registerForm['getPass'].value;

  //create account
  auth.createUserWithEmailAndPassword(getEmail,getPass).then(cred=>{
    console.log(cred.user);
    loginToggle();
  })
});


//..................................Login Auth..........................//
const loginForm = document.querySelector('#login-page');
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  //...................Get Email...........................//
  const enterMail = loginForm['enterMail'].value;
  const enterPass = loginForm['enterPass'].value;

  const promise = auth.signInWithEmailAndPassword(enterMail,enterPass);
  promise.catch(function(error){
    var message = error.message;
    alert("Error: " +message);
  });
  promise.then(cred=>{
    loginForm.reset();
  });
});

//.............Logout.......................//

const logOutbtn = document.querySelector('#signOut');
logOutbtn.addEventListener('click', (e)=>{
  e.preventDefault();
  auth.signOut();
});

