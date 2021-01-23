// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log ("write password")
}
//Define variables that will hold the characters
const lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numberCase = ["1","2","3","4","5","6","7","8","9"]
const specialCase = ["!","@","#","$","%","^","&","*","(",")","_","+"]

//create a function that creates alerts and implements the responses into the password criteria
function generatePassword () {  
  var charsLower = confirm ("include lower case chars?");
  var charsUpper = confirm ("include upper case chars?");
  var charsNumbers = confirm ("include numbers?");
  var charsSpecial = confirm("include special characters?");
  var userLength = parseInt(prompt ("How many characters will your password be?")); 
  let passArray = []
  let charSet = []
   
  // check to make sure the user enters a number
  if (isNaN(userLength)) {
    alert ("Must be a number")
  }
  //check to make sure they have entered a number between 8 and 128
  if (8 > userLength || userLength > 128) {
    alert ("Must be between 8 and 128 characters")
  }
  //check to make sure they have entered at least one criteria
  if (charsLower === false && charsUpper === false && charsNumbers === false && charsSpecial === false)
    alert("Must select at least one criteria")

  //check for criteria
  if (charsLower === true){
    charSet.push(...lowerCase)
    console.log ("charsLower")
  }
  if (charsUpper === true) {
    charSet.push(...upperCase)
    console.log ("charsUpper")
  }
  if (charsNumbers === true) {
    charSet.push(...numberCase)
    console.log("charsNumbers")
  }
  if (charsSpecial === true) {
    charSet.push(...specialCase)
    console.log("charsSpecial")
  }
  console.log(charSet)
  for( var i=0; i<userLength; i++ ){
    let charPick = Math.floor(Math.random()*charSet.length)
    console.log(charPick)
    //passArray.push += charSet[charPick]
    passArray.push(charSet[charPick])
  }
  return passArray.join ('')
}

