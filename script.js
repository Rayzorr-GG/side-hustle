var nameErroe = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var passwordError = document.getElementById('pass-error')


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
    phoneError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please phone number should be 12';
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