// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var pwdCriteria = {
  // length of password property
  pwdLength: 0,

  //array for lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array for uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array for numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array for the special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_",
     "`", "{", "}", "|", "~"]//32
}

// Write password into the #password input
function writePassword() {
  //function to generate the password 
  var password = generatePassword();

  //set passwordText equal to textArea on index.html, with the ID of password 
  var passwordText = document.querySelector("#password");

  //text area will be updated with the new password
  passwordText.value = password;

}

// Added an event listener to the generate button
generateBtn.addEventListener("click", writePassword);


//function that will handle generating the new password
function generatePassword() {

  //holds the password that will be generated and returned 
  var result = "";

  //variables to collect the user's input
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  //initialize the variables
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  //check the length of the password
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter the number of characters you need in the password \nPassword MUST be between 8 and 128 characters.");

    //if the user selects the "cancel" button
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //check to see if the user enters a number
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        //check to see if the password meets the criteria for length
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password MUST be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for criteria
          showPrompts();

          // add characters until the pwdLength is equal to the length the user has inputted
          while (pwdCriteria.pwdLength < passwordLength) {
            //IF statement to ensure the user selects at least ONE criterion 
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You MUST select at LEAST one criterion of lowercase, uppercase, numbers OR special characters")
              showPrompts();
            }
            else {
              //if  user selected lowercase and there is still room to add characters then
              //randomly grab a lowercase letter from the array and add it to the end of result 
              //increase pwdLength by 1
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

              //if a special character is selected and there is more room to add characters, then
              //randomly grab a special character from the array and then add it to the end of the result 
              //and then increase pwdLength by 1              
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }

              //if a UPPERCASE character is selected and there is more room to add characters, then
              //randomly grab a uppercase character from the array and then add it to the end of the result 
              //and then increase pwdLength by 1   
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }


              //if a number is selected and there is more room to add characters, then
              //randomly grab a number from the array and then add it to the end of the result 
              //and then increase pwdLength by 1   
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }

    //return the generated password 
    return result;

    //User prompts
    function showPrompts() {
      lowerCase = confirm("Would you like to use lower case letters?");
      upperCase = confirm("Would you like to use upper case letters?");
      numbers = confirm("Would you like to use numbers?");
      specialChar = confirm("Would you like to use any special characters?");
    }
  }
}