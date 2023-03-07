// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = number (prompt("Click button for a random password"));
var charType = promt ("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()~`:;",<.>/?'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase
  var retVal = ""
  for (var i = 0; i < length; i++)
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
