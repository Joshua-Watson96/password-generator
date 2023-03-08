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

var charCount = parseInt(window.prompt("How many characters would you like in your password? Choose between 8 and 128"))
  if (isNaN(charCount)) {
    window.alert("Please enter a number between 8 and 128")
     }
     if (charCount < 8 || charCount > 128){
  window.alert("Has to be between 8 and 128 characters")
  }


var useLowercase = window.confirm("Should your password contain lowercase characters?")
if (useLowercase){
  password += getRandomChar(charSets.lowercase);
  charToUse.push (...charSets.lowercase)
}

var useUppercase = window.confirm("Do you want your password contain uppercase characters?")
if (useUppercase){
  password += getRandomChar(charSets.uppercase);
  charToUse.push (...charSets.uppercase);
}

var useNumeric = window.confirm("Do you want your password to contain numbers?")
if (useNumeric){
  password += getRandomChar(charSets.numeric);
  charToUse.push (...charSets.numeric)
}

var useSpecial = window.confirm("Do you want your password to contain special characters?")
if(useSpecial){
  window.confirm = false
}
else if (useSpecial){ 
  password += getRandomChar(charSets.special);
  charToUse.push (...charSets.special)
}

  while(password.length < charCount){
    password += getRandomChar(charToUse)
  }
if (!useLowercase && !useNumeric && !useSpecial && !useUppercase){
  choices = alert("You must choose at least one")
  
}
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
