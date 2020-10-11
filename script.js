//Password Generator - User will be prompted what input types they would like for their auto generated password.
// When they click the generate button they will be given a password with the selected length, type, and special characters.

//HTML Element Variables//
var passText = document.getElementById("password")
var btn = document.getElementById("generate")

//JS Variables for Functions//
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numChar = "1234567890";
var specialChar = "!@#$%^&*()";


//Functions//
function start() { 
  var numOfChar = prompt(
    "How many charcters would you like your password to be?"
  );
  while(numOfChar < 8 || numOfChar > 128){
    numOfChar = prompt("Please enter a number between 8 and 128!");
  }
  var upperCase = confirm("Do you want to include uppercase letters?");
  console.log(upperCase);
  var lowerCase = confirm("Do you want to include lowercase letters?");
  console.log(lowerCase);
  var numChars = confirm("Do you want to include numbers?");
  console.log(numChars);
  var specialChars = confirm("Do you want to include special characters?");
  console.log(specialChars);
  
   //password generation 
  var charSet = ""
  if(upperCase === true){
    charSet += upperChar;
  } if (lowerCase === true){
    charSet+= lowerChar;
  } if (numChars === true){
    charSet += numChar;
  } if (specialChars === true) {
    charSet += specialChar;
  }
  passGen(charSet, numOfChar)
  console.log(charSet);
}

function passGen(variable, characterAmt) {
  var randomString = "";
  variable[Math.floor(Math.random().toString(36).slice(2) * variable.length)];

  for (i = 1; i <= parseInt(characterAmt); i++) {
    var char = Math.floor(Math.random() * variable.length + 1);
    randomString += variable.charAt(char);
  }
  passText.textContent = randomString
  return randomString; 
}


btn.addEventListener("click", start)


