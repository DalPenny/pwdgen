// javascript Code starts here 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {

  //setting length of password
  pwdLength: 0,

  //array for lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array for uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array for numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array for special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_",
     "`", "{", "}", "|", "~"]//32
}

// Write password to the #password input on index.html
function writePassword() {
  //call generatePassword function
  var password = generatePassword();
  
  //set passwordText = to the textArea on index.html witht he ID of password
  var passwordText = document.querySelector("#password");

  //update the textArea with the new password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to handle generating a new password
function generatePassword() {

  //variable for the password to be generated and returned 
  var result = "";

  //variables for input from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  //initialize variables
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter password length \nPassword MUST be between 8 and 128 characters.");

    //if user pressed cancel button
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //checking whether the user entered a number
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        //check password meets length limitations
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password MUST be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for selection
          showPrompts();

          //keep adding characters based on user selection until password Length is equal to the length the user wanted
          while (pwdCriteria.pwdLength < passwordLength) {
            //If statement to make sure the user selects at least one of the following  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You MUST select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              //if the user selected lowercase and there is more room to add characters then
              //get a random lowercase letter from the array and add it to the end of result 
              //increase pwdLength by 1
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

              //if the user selected a special character and there is more room to add characters then
              //get a random apecial character from the array and add it to the end of result 
              //increase pwdLength by 1              
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }

              //if the user selected an uppercase letter and there is more room to add characters then
              //get a random uppercase letter from the array and add it to the end of result 
              //increase pwdLength by 1
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }

              //if the user selected a number and there is more room to add characters then
              //get a random number from the array and add it to the end of result 
              //increase pwdLength by 1
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

    //internal function to prompt the user for character selection
    function showPrompts() {
      lowerCase = confirm("Use lower case letters?");
      upperCase = confirm("Use upper case letters?");
      numbers = confirm("Use numbers?");
      specialChar = confirm("Use any special characters?");
    }
  }
}