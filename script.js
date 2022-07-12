var generateBtn = document.querySelector("#button");
console.log(generateBtn)

var lcase ="abcdefghijklmnopqrstuvwxyz";

var ucase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var char ="!@#$%^&*()=+<>";

var num = "0123456789";

var allChar = "";

// Prompts for generating password
function generatePassword() {
  var pwdLength = prompt(
    "How long would you like your password to be? Please specify between 8 and 128 characters."
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    var lowerCase = confirm("Would you like to use lowercase letters?");
    if(lowerCase){
      allChar += lcase
    };

    var upperCase = confirm("Would you like to use uppercase letters?");
    if (upperCase){
      allChar += ucase
    };

    var specChar = confirm("Would you like to use special characters?");
    if (specChar){
      allChar += char
    };

    var numbers = confirm("Would you like to use numbers?");
    if (num){
      allChar += num
    };

    if (
      lowerCase === false &&
      upperCase === false &&
      specChar === false &&
      numbers === false
    ) {
      alert("You must select at least one character type.");
      generatePassword();
    }
  }

  var pwd = "";
  for (let i=0; i<pwdLength; i++){
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return pwd
}


function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)