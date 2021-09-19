let passwordLength;   //set the length of the password

//Confirm User Choices:

var confirmUpperCase; //To confirm if uppercase
var confirmLowerCase; //To confirm if lowercase
var confirmNumber;    //To confirm if numbers
var confirmSpecial;   //To confirm if special characters

//create an array for lowercase values
lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//create function to eventually take lower case values and change them to upper. Beats making a new array
//This fuction takes parameter x (the array) and changes the value to an uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

//calling above function to take the lowercase array and change it to uppercase.
//I use the map tool, and use the function created above so I can map out each element automatically
upperCase = lowerCase.map(toUpper);

//created an array of special chars
let specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "^",
  "_",
  "`",
  "~",
];

//created an array of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//all the characters that can be in possible password
var userChoicesChars = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//created function that gets called in the writePassword function
function generatePassword() {
  //ask the user as a promt. Finding out how many characters should be in generated password
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  console.log("Password length " + passwordLength);

  //if user just hits 'OK' while promt is empty, make them enter a valid input
  if (!passwordLength) {
    alert("A value is required");

  //If the password is less than 8 OR greater than 128, make them enter another password length within the proper range
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password Value Entered: " + passwordLength);
  
  //When the password length is acceptable, ask the user what they would like in their password.
  //Asking the user if they want lowercase, uppercase, numbers, special chars.
  //Log each answer
  } else {
    confirmLowerCase = confirm("Lower Case Values?");
    console.log("Lower case " + confirmLowerCase);
    confirmUpperCase = confirm("Upper Case Values?");
    console.log("Upper case " + confirmUpperCase);
    confirmNumber = confirm("Numbers?");
    console.log("Numbers " + confirmNumber);
    confirmSpecial = confirm("Special Characters");
    console.log("Special " + confirmSpecial);
  }

  //If they selected nothing (kept hitting cancel), alert the user to needed to select at least 1 criteria and restart
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecial) {
    userChoicesChars = alert("Must select atleast 1 criteria");
  }

  //if the user wants special characters, attach the specialChar array to the userChoicesChars array
  if (confirmSpecial) { 
    userChoicesChars= userChoicesChars.concat(specialChar);
  }

  //if the user wants number characters, attach the number array to the userChoicesChars array
  if (confirmNumber) {
    userChoicesChars= userChoicesChars.concat(numbers);
  }

  //if the user wants uppercase characters, attach the uppercase array to the userChoicesChars array
  if (confirmUpperCase) {
    userChoicesChars = userChoicesChars.concat(upperCase);
  }

  //if the user wants lowercase characters, attach the specialChar array to the userChoicesChars array
  if (confirmLowerCase) {
    userChoicesChars= userChoicesChars.concat(lowerCase);
  }

  //Log all the values that the user could potentially have in their new password
  console.log(userChoicesChars);

  //create a blank password array. This is where random elements would get inserted and that would form the new array.
  var generatedPassword = [];

  //this for loop repeates itself until it reaches the password length. 
  //During that time, it generates a new random element from the userChoicesChars array (the array that contains all possible values) and appends it to the end of the passwordBlank array.
  for(var i = 0; i < passwordLength; i++){
    var element = userChoicesChars[Math.floor(Math.random() * userChoicesChars.length)];
    generatedPassword.push(element);
    console.log("Created Password");
  }

  //returning the password
  var passwordDisplayed = generatedPassword.join("");
  console.log("The password created is: " + passwordDisplayed);
  return passwordDisplayed;
}

