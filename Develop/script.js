// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var length = 8 < 128,
    charSet = lowercase, uppercase, numeric, special,
    retVal = "";
  for (var i = 0, n = charSet.length; i < length; ++i){
    retVal += charSet.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
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
