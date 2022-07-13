var generateBtn = document.querySelector("#button");
console.log(generateBtn)

var lcase ="abcdefghijklmnopqrstuvwxyz";

var ucase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var char ="!@#$%^&*()=+<>";

var num = "0123456789";

var newPass = "";

// Prompts for generating password
function generatePassword() {
  newPass="";
  var passLength = prompt(
    "How long would you like your password to be? Please specify between 8 and 128 characters."
  );
  //input parameters that the password is 8-128 characters
  if (passLength < 8 || passLength > 128 || isNaN(parseInt(passLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    var lowerCase = confirm("Would you like to use lowercase letters?");
    if(lowerCase){
      newPass += lcase;
      console.log(newPass);
    };

    var upperCase = confirm("Would you like to use uppercase letters?");
    if (upperCase){
      newPass += ucase;
      console.log(newPass);
    };

    var specChar = confirm("Would you like to use special characters?");
    if (specChar){
      newPass += char;
      console.log(newPass);
    };

    var numbers = confirm("Would you like to use numbers?");
    if (num){
      newPass += num;
      console.log(newPass);
    };

    if (lowerCase === false && upperCase === false && specChar === false && numbers === false) {
      alert("You must select at least one character type.");
      generatePassword();
    }
  }

  var pwd = "";
  for (let i=0; i<passLength; i++){
    pwd += newPass.charAt(Math.floor(Math.random() * newPass.length))
  }
  return pwd
}


function finalPass() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", finalPass);