
// i'M FIRST OF ALL DECLARING MY VARS FOR ACCEPTABLE CHARACTERS
// Array of special characters to be included in password
var specialChars = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericChars = ['0','1','2','3','4','5','6','7','8','9'];

// Array of lowercase characters to be included in password
var lowerCaseChars = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCaseChars = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
	console.log ("Button pushed!") // just to show that something is happening
  //PSEUDO CODE TO KEEP IT STRAIGHT IN MY HEAD
  //Define Function inputs
  //1. Prompt User for Inputs
  //  1.1 PW Lenght between 8 and 128 characters
  //  1.2 Type of characters required: Uppercase, Lowercase, Numerical, Special Chars.. At least 1 type requires
  //  1.3 Validate all the above  - Lenght, and character type
  //2. Generate PW
  //3. Write PW to the 'return' below

	return "Generated pw will go here!" // we haven't defined the input paramenters yet, but 'something' is returned


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);