// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button   ==========================================================================
generateBtn.addEventListener("click", writePassword);

alert("Please click 'Generate Password' button to start creating a unique password! \nChoices: lowercase, uppercase, numeric, &/or special characters ");

// List possible criteria for password characters   =====================================================================
// '.split()' is used to split each character of a string   <--- an alternate method to : ex: var ... = ["a","b", ... ] ]
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var low = lowercase.split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var up = uppercase.split("");
var numeric = "0123456789";
var num = numeric.split("");
var special = "`~!@#$%^&*()_-+=[]{}|;:<>,.?";
var spec = special.split("");

// Write password to the #password input   =========================================================================
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; 
}

function generatePassword() {
  // Asks for user's input
  var pLength = parseInt(prompt("Between 8 and 128 characters, how long would you like your password to be?"))

  if (pLength < 8 || pLength > 128) {               // length doesn't follow requirement
    alert("Please input a value between 8 and 128!");
    return generatePassword();                         // asks for a # again
  }

  else if (pLength >= 8 && pLength <= 128) {
    // Check for user's preferences for password
    let confirmL = confirm("Would it include lowercase letters? \n Click 'OK' for 'yes' or 'Cancel' for 'no'.");
    let confirmU = confirm("Would it include uppercase letters? \n Click 'OK' for 'yes' or 'Cancel' for 'no'");
    let confirmN = confirm("Would it include numbers? \n Click 'OK' for 'yes' or 'Cancel' for 'no'");
    let confirmS = confirm("Would it include special characters? \n Click 'OK' for 'yes' or 'Cancel' for 'no'");

      var characterSet = [];

      if (!confirmL && !confirmU && !confirmN && !confirmS) {                  // if user answers 'no' to all confirm ?'s
        characterSet = alert("You must choose at least 1 criteria of characters to generate a password!");
      }

      // below: "Array.prototype.concat()" is used.  
      // concat() method is used to merge 2 or more arrays. This method doesn't change the existing arrays, but instead returns a new array.
      else if (confirmL && confirmU && confirmN && confirmS) {                // if user answers 'yes' to all confirm ?'s
        characterSet = character.concat(low, up, num, spec);
      }

      // if user answers 'yes' to 3 confirm ?'s
      else if (confirmL && confirmU && confirmN) {
        characterSet = character.concat(low, up, num);
      }
      else if (confirmL && confirmU && confirmS) {
        characterSet = character.concat(low, up, spec);
      }
      else if (confirmU && confirmN && confirmS) {
        characterSet = character.concat(up, num, spec);
      }
      else if (confirmL && confirmN && confirmS) { 
        characterSet = character.concat(low, num, spec);
      }

      // if 'yes' to 2 ?'s
      else if (confirmL && confirmU) {
        characterSet = character.concat(low, up);
      }
      else if (confirmL && confirmN) {
        characterSet = character.concat(low, num);
      }
      else if (confirmL && confirmS) {
        characterSet = character.concat(low, spec);
      }
      else if (confirmU && confirmN) {
        characterSet = character.concat(up, num);
      }
      else if (confirmU && confirmS) {
        characterSet = character.concat(up, spec);
      }
      else if (confirmN && confirmS) {
        characterSet = character.concat(num, spec);
      }

      // if only 1 pass criteria is chosen
      else if (confirmL) {
        characterSet = low;
      }
      else if (confirmU) {
        characterSet = up;
      }
      else if (confirmN) {
        characterSet = num;
      }
      else if (confirmS) {
        characterSet = spec;
      }

      // loop for generating the random pass
      pResult = [];
      for (var i = 0; i<pLength; i++){
        var pResult += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      }
    }
  return pResult;
}