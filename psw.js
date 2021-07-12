// Assignment code here
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lc = "abcdefghijklmnopqrstuvwxyz"
const special = "!?#$%"
const numbers = "0123456789"

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// criteria
let length = 0;
let includeLowercase = false
let includeUppercase = false
let includeNumeric = false
let includeSpecial = false

function writePassword() {
  // ask for criteria to include
  promptUser()
  // generate password
  var password = generatePassword();
  // set password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function promptUser() {
    let result, resultLC, resultUC, resultNum, resultSp
    let isValidLength = false
    
    // get valid length from user
    while (!isValidLength) {
      result = prompt("How long do you want this password to be? (Choose between 8 to 128")
      length = parseInt(result)
      if(!isNaN(length) && length >= 8 && length <= 128) {
        isValidLength = true
      } else {
        alert("You must enter a number between 8 and 128.")
      }
    }

    // get lc criteria
    resultLC = prompt("Do you want lowercase letters?")
    if (resultLC != null && resultLC.toLowerCase() === 'yes') {
      includeLowercase = true
    }

    // get uc criteria
    resultUC = prompt("Do you want uppercase letters?") // YES == yes == Yes == yES
    if (resultUC != null && resultUC.toLowerCase() === 'yes') {
      includeUppercase = true
    }

    // get numeric criteria
    resultNum = prompt("Do you want to use numbers")
    if (resultNum != null && resultNum.toLowerCase() === 'yes') {
      includeNumeric = true 
    }

    // get special chars criteria
    resultSp = prompt("Do you want to use special characters ")
    if (resultSp != null && resultSp.toLowerCase() === 'yes') {
      includeSpecial = true
    }
}

function generatePassword() {
  let password = ""
  let characters = ""
  // determine what values to choose from
  if (includeLowercase) {
    characters = characters + lc
  }

  if (includeUppercase) {
    characters = characters + uc
  }

  if (includeSpecial) {
    characters = characters + special
  }

  if (includeNumeric) {
    characters = characters + numbers
  }

  
  // assemble the password
  for (let i = 0; i < length; i++) {
    // get random number
    const random = Math.floor(Math.random() * characters.length)
    // grab character from available characters
    password += characters[random]
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
