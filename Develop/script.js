// Assignment Code
// Global variables used.
var generateBtn = document.querySelector("#generate");
var charLowercase;
var charUppercase;
var charNumber;
var charSpecial;
var charCount;
var enter;
var pass;
// var charToUse;

var characterPool = [
  
  //lowercase characters
 Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

 //uppdercase characters
  Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 
 //Numeric characters
  Numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  
 //Special Characters
 Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"],
 
 ];
 console.log(characterPool);

//lowercase characters
 Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//uppdercase characters
 Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Numeric characters
 Numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 
//Special Characters
Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


  // function  getRandomChar(arr) {
  //   var passwordindex = pass[Math.floor(Math.random() * pass.length)];
  //   var randomelement = pass[passwordindex];
  //   return randomelement;
  //   }

  function  getRandomChar(arr) {
    var passwordindex = [Math.floor(Math.random() * arr.length)];
    var randomelement = arr[passwordindex];
    return randomelement;
    }

function generatePassword(){
  

  // var getRandomChar;

charCount = parseInt(window.prompt("How many characters would you like in your password? Please choose between 8 and 128"))
  
if (charCount < 8 || charCount > 128){
  window.alert("Has to be between 8 and 128 characters");
  }

  // asks the user if they want the following; Lowercase, Uppercase, Number, or special.
  else {
    
    charLowercase = window.confirm("Do you want to use Lowercase characters?");
    charUppercase = window.confirm("Do you want to use Uppercase characters?");
    charNumber = window.confirm("Do you want to use Numbers?");
    charSpecial = window.confirm("Do you want to use Special characters?");

  };

 if (!charLowercase && !charNumber && !charSpecial && !charUppercase) {
      charCount = window.alert("You must choose at least one")
      };

console.log(charCount);

// 4 prompt oks
if (charNumber && charLowercase && charUppercase && charSpecial) {
  pass  = characterPool;
}

// 3 prompt oks
else if (charNumber && charSpecial && charLowercase){
  pass = Numeric.concat(Special, Lowercase);
}

else if (charLowercase && charUppercase && charNumber){
  pass = Lowercase.concat(Uppercase, Special);
}

else if(charSpecial && charUppercase && charNumber){
  pass = Special.concat(Uppercase, Numeric);
}

else if(charSpecial && charUppercase && charLowercase){
  pass = Special.concat(Uppercase, Lowercase);
}

// 2 prompt oks
else if (charLowercase && charUppercase){
  pass = Uppercase.concat(Lowercase);
}

else if (charLowercase && charNumber){
  pass = Lowercase.concat(Numeric);
}

else if (charNumber && charUppercase){
  pass = Numeric.concat(Uppercase);
}

else if (charNumber && charSpecial){
  pass = Numeric.concat(Special);
}

else if (charSpecial && charLowercase){
  pass = Special.concat(Lowercase);
}

else if(charUppercase && charSpecial){
  pass = Uppercase.concat(Special);
}

// 1 prompt ok

else if (charLowercase){
  pass = Lowercase;
}

else if (charUppercase){
  pass = Uppercase;
}

else if (charNumber){
  pass = Numeric;
}

else if (charSpecial){
  pass = Special;
}


  while(password.length < charCount){
    password = getRandomChar
  }
console.log(password)
  return password;
}
   
    // function  getRandomChar(arr) {
    // var passwordindex = Math.floor(Math.random() * arr.length);
    // var randomelement = arr[passwordindex];
    // return randomelement;
    // }
  
    

var password = [];

// for (var index = 0; index < enter; index++){
//   var pickPass = Pass[Math.floor(Math.random() * pass.length)];
//   password.push(pickPass);
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
