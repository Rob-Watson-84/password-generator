var password=document.getElementById("password");

function genPassword() {
  var character = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  var password = "";

 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * character.length);
   password += character.substring(randomNumber, randomNumber +1);
  }
  
  document.getElementById("password").value = password;
 }