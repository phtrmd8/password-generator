// Assignment Code

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button   ==========================================================================
generateBtn.addEventListener("click", writePassword);

alert("Please click 'Generate Password' button to start creating a unique password! \nChoices: lowercase, uppercase, numeric, &/or special characters ");

// List possible criteria for password characters   =====================================================================
// '.split()' is used to split each character of a string   <--- an alternate method to : ex: var ... = ["a","b", ... ]
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
        return generatePassword();
      }

      // below: "Array.prototype.concat()" is used.  ================================================
      // concat() method is used to merge 2 or more arrays. This method doesn't change the existing arrays, but instead returns a new array.
      else if (confirmL && confirmU && confirmN && confirmS) {                // if user answers 'yes' to all confirm ?'s
        characterSet = low.concat(up, num, spec);
      }

      // if user answers 'yes' to 3 confirm ?'s
      else if (confirmL && confirmU && confirmN) {
        characterSet = low.concat(up, num);
      }
      else if (confirmL && confirmU && confirmS) {
        characterSet = low.concat(up, spec);
      }
      else if (confirmU && confirmN && confirmS) {
        characterSet = up.concat(num, spec);
      }
      else if (confirmL && confirmN && confirmS) {
        characterSet = low.concat(num, spec);
      }

      // if 'yes' to 2 ?'s
      else if (confirmL && confirmU) {
        characterSet = low.concat(up);
      }
      else if (confirmL && confirmN) {
        characterSet = low.concat(num);
      }
      else if (confirmL && confirmS) {
        characterSet = low.concat(spec);
      }
      else if (confirmU && confirmN) {
        characterSet = up.concat(num);
      }
      else if (confirmU && confirmS) {
        characterSet = up.concat(spec);
      }
      else if (confirmN && confirmS) {
        characterSet = num.concat(spec);
      }

      // if only 1 pass criteria is chosen
      else if (confirmL) {
        characterSet = lowercase;
      }
      else if (confirmU) {
        characterSet = uppercase;
      }
      else if (confirmN) {
        characterSet = numeric;
      }
      else if (confirmS) {
        characterSet = special;
      }

      // loop for generating the random pass
      pResult = [];
      for (var i = 0; i < pLength; i++) {
        var random = Math.floor(Math.random() * characterSet.length);
        pResult += characterSet[random];
      }

      }
    return pResult;          // (display password) same as ... document.getElementById("password").innerHTML =  pResult;
}