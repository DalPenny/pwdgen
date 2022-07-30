// javascript Code starts here 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Create the password object.
var pwFormula = {

  //setting the initial length of the password
   curLength: 0,

  //special characters
  pwSpecial: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-" ,"/" , "<", "=" , ">", "?", "@", "[", "]", "_", "{", "|", "}"],

  //numbers
  pwnum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //simple letters
  pwSimple: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //capital letters
  pwCaps: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}

// Write password to the #password input on index.html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to handle generating a new password
function generatePassword() {

  //variable for the password to be generated 
  var curpwText = "";

  //user prompt variables
  var pwLength = 0;
  var caps;
  var simple;
  var numbers;
  var spCharacter; 

  //initialize variables
  pwLength = 0;
  pwFormula.curLength = 0;
  curpwText = "";

  //validate length of password
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Please enter password length. Your Password has to be between 8 and 128 characters.");

        //checking whether the user entered a number
       if (isNaN(pwLength)) {
          alert("Please enter a number");
          return "Your Password";
        }
        else {
        //check password meets length limitations and if cancel button is pressed
        if (pwLength < 8 || pwLength > 128 || pwLength === null) {
          alert("Password length must be between 8 and 128.");
          return "Your Password";
        }
        else {

          //show prompts for selection
          promptMessages();

          //add characters one at a time randomly if user selected password length is not met 
          while (pwFormula. curLength < pwLength) {
            //If statement ensures user selects one of either simple,caps,number or special char  
            if (simple === false && caps === false && numbers === false && spCharacter === false) {
              alert("Please select at least one character type - simple, caps, numbers or special characters")
              promptMessages();
            }
            else {
              if (simple === true && pwFormula. curLength < pwLength) {
                var sim = pwFormula.pwSimple[Math.floor(Math.random() * 26)]
                curpwText = curpwText + sim;
                pwFormula. curLength++;
              }       
              if (spCharacter === true && pwFormula. curLength < pwLength) {
                var spc = pwFormula.pwSpecial[Math.floor(Math.random() * 22)]
                curpwText = curpwText + spc;
                pwFormula. curLength++;
              }
              if (caps === true && pwFormula. curLength < pwLength) {
                var cap = pwFormula.pwCaps[Math.floor(Math.random() * 26)]
                curpwText = curpwText + cap;
                pwFormula. curLength++;
              }
              if (numbers === true && pwFormula. curLength < pwLength) {
                var num = pwFormula.pwnum[Math.floor(Math.random() * 10)]
                curpwText = curpwText + num;
                pwFormula. curLength++;
              }
            }
          }
        }
      }
    }

    //return the generated password 
    return curpwText;

    //internal function to prompt the user for character selection
    function promptMessages() {
      simple = confirm("Use simple letters?");
      caps = confirm("Use capital letters?");
      numbers = confirm("Use numbers?");
      spCharacter = confirm("Use special characters?");
    }
  }