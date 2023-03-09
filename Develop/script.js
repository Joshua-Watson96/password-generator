// Assignment Code
// Global variables used.
var generateBtn = document.querySelector("#generate");
var password = [];
var charLowercase;
var charUppercase;
var charNumber;
var charSpecial;
var charCount;
var enter;
var charToUse;

//lowercase characters
  charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//uppdercase characters
  charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Numeric characters
  charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

//Special Characters
  charSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]; 

  var getRandomChar;


function generatePassword(){
  
  var getRandomChar;

charCount = parseInt(window.prompt("How many characters would you like in your password? Please choose between 8 and 128"))
  
if (charCount < 8 || charCount > 128){
  window.alert("Has to be between 8 and 128 characters")
  }

  // asks the user if they want the following; Lowercase, Uppdercase, Number, or special.
  else {
    
    charLowercase = window.confirm("Do you want to use Lowercase characters?");
    charUppercase = window.confirm("Do you want to use Uppercase characters?");
    charNumber = window.confirm("Do you want to use Numbers?");
    charSpecial = window.confirm("Do you want to use Special characters?");

  };

 if (!charLowercase && !charNumber && !charSpecial && !charUppercase) {
      charCount = window.alert("You must choose at least one")
      }

else if (charLowercase && charUppercase && charNumber && charSpecial) {
  getRandomChar = (charLowercase, charUppercase, charNumber, charSpecial)
}

// var password = "";
// var useLowercase = window.confirm("Should your password contain lowercase characters?")
// if (useLowercase){
//   password += getRandomChar(useLowercase);
//   charToUse.push (useLowercase)
// }

// var useUppercase = window.confirm("Do you want your password contain uppercase characters?")
// if (useUppercase){
//   password += getRandomChar(useUppercase);
//   charToUse.push (useUppercase);
// }

// var useNumber = window.confirm("Do you want your password to contain numbers?")
// if (useNumber){
//   password += getRandomChar(useNumber);
//   charToUse.push (useNumber)
// }

// var useSpecial = window.confirm("Do you want your password to contain special characters?")
// if (useSpecial){ 
//   password += getRandomChar(charSets.special);
//   charToUse.push (...charSets.special)
// }

  // while(password.length < charCount){
  //   password += getRandomChar()
  // }
}
  for 
    var getRandomChar = password = Math.floor(Math.random() * getRandomChar.length);
    password.push(getRandomChar);
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
