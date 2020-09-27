//...........................Create User...............................//
const registerForm = document.querySelector('#register-page');

registerForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const getEmail = registerForm['getEmail'].value;
  const getPass = registerForm['getPass'].value;
  const checkTnC = registerForm['checkTC'];
  if (checkTnC.checked = 'true')
  {
    auth.createUserWithEmailAndPassword(getEmail,getPass).then(cred=>{
      console.log(cred.user);
      registerForm.reset();
      loginToggle();
    }) 
  }
})


//..................................Login Auth..........................//
const loginForm = document.querySelector('#login-page');

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const enterMail = loginForm['enterMail'].value;
  const enterPass = loginForm['enterPass'].value;

  const promise = auth.signInWithEmailAndPassword(enterMail,enterPass);
  promise.catch(function(error){
    var message = error.message;
    alert("Error: " +message);
  });
  promise.then(cred=>{
    console.log(cred.user);
    window.location.href = 'main.html'
  })
})
//.............Get Currently signed-in user.......................//




