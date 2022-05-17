var nameErroe = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var passwordError = document.getElementById('pass-error')
var password2Error = document.getElementById('pass2-error')


function validateName() {
  var uname = document.getElementById('username').value;

  if (uname.length == 0){
    nameErroe.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Name is required';
    return false;
  }
  
  if (uname !== ''){
    nameErroe.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> input a valid name!';
    return false;
  }

  nameErroe.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById('phone').value;

  if (phone.length == 0){
    phoneError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill the space';
    return false;
  }
  if (phone.length !== 12){
    phoneError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> phone number should be 12-digits';
    return false;
  }
  

  phoneError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}


function validateEmail() {
  var email = document.getElementById('email').value;

  if (email.length == 0){
    emailError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill the space';
    return false;
  
  }

  emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}

function validatePass() {
  var pass = document.getElementById('password').value;
  
  if (pass.length == 0){
    passwordError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill the space';
    return false;
  
  }

  if (pass.length < 8){
    passwordError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> password should be at least 8 digits';
    return false;
  
  }
  passwordError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;

 

  
}


function validatePass2() {
  var pass2 = document.getElementById('password2').value;

  if (pass2.length == 0){
    password2Error.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill the space';
    return false;
  }

  if (pass2.length < 8){
    password2Error.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> password should be at least 8 digits';
    return false;
  }

  
}

function validatePass2() {
  var pass = document.getElementById('password').value;
  var pass2 = document.getElementById('password2').value;

  if (pass2 !== pass){
    password2Error.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> password does not match';
    return false;
  }

  password2Error.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}


function hide() {
  var x = document.getElementById('password');
  // var p = document.getElementById('password2')
  var y = document.getElementById('hide1');
  var z = document.getElementById('hide2');

  if(x.type === 'password') {
    x.type='text'
    y.style.display= "block";
    z.style.display= "none";
  } else {
    x.type='password'
    y.style.display= "none";
    z.style.display= "block";
  }
}

function hide2() {
  // var x = document.getElementById('password');
  var p = document.getElementById('password2')
  var y = document.getElementById('hide1');
  var z = document.getElementById('hide2');

  if(p.type === 'password') {
    p.type='text'
    y.style.display= "block";
    z.style.display= "none";
  } else {
    p.type='password'
    y.style.display= "none";
    z.style.display= "block";
  }
}