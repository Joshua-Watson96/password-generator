// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""
var charToUse = [];


function getRandomChar(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword(){
  
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()~`:;\'",<.>/?' 
  };

var charCount = parseInt(window.prompt("How many characters would you like in your password"))
  if (isNaN(charCount)) {
    window.alert("Please enter a number between 8 and 128")
    return
  }
if (charCount < 8 || charCount > 128){
  window.alert("Has to be between 8 and 128 characters")
}

var useLowercase = window.confirm("Should your password contain lowercase characters")
if (useLowercase){
  password += getRandomChar(charSets.lowercase);
  charToUse.push (...charSets.lowercase)
}


  while(password.length < charCount){
    password += getRandomChar(charToUse)
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
