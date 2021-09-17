let passwordLength;

//Confirm User Choices
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecial;

/*Got list of special characters online*/

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

var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

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

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var userChoices = [];

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

function generatePassword() {
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("A value is required");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password Value Entered: " + passwordLength);
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

  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumber &&
    !confirmSpecial
  ) {
    userChoices = alert("Must select atleast 1 criteria");
  }

  if (confirmSpecial) {
    // userChoices = specialChar;
    userChoices = userChoices.concat(specialChar);
  }

  if (confirmNumber) {
    // userChoices = numbers;
    userChoices = userChoices.concat(numbers);
  }

  if (confirmUpperCase) {
    // userChoices = upperCase;
    userChoices = userChoices.concat(upperCase);
  }

  if (confirmLowerCase) {
    // userChoices = lowerCase;
    userChoices = userChoices.concat(lowerCase);
  }

  console.log(
  userChoices
  );

  var passwordBlank = [];

  //TODO//
  for(var i = 0; i < passwordLength; i++){
    var element = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(element);
    console.log("Created Password");
  }


  var password = passwordBlank.join("");
  console.log("The password created is: " + password);
  return password;
}

