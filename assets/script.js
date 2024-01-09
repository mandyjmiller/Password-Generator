// Function to generate a random password based on criteria
function generatePassword() {
  // Define the arrays for the accepted character types
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; //Have removed comma separation as was affecting the output of pw generated - was including the commas. There's Probably a better way to do it!
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "$@%&*£";

  let password = "";
  const allChars = []; // allChars Empty array which is populated based on the user choice of lowercase / uppercase etc

  const length = parseInt(
    prompt(
      "Please enter the length of the password (between 8 and 128 characters):"
    )
  ); // Prompt user for password options
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters."); // Validates that pw is correct length, if not, prompts user to enter again
    return;
  }

  if (confirm("Would you like to include lowercase characters? Click OK")) {
    allChars.push(lowercaseChars); // If selected, lowercase is added to allChars array
  }
  if (confirm("Would you like to include uppercase characters? Click OK")) {
    allChars.push(uppercaseChars); // If selected, uppercase is added to allChars array
  }
  if (confirm("Would you like to include numeric characters? Click OK")) {
    allChars.push(numericChars); // If selected, numeric is added to allChars array
  }
  if (confirm("Would you like to include special characters? Click OK")) {
    allChars.push(specialChars); // If selected, special is added to allChars array
  }

  if (allChars.length === 0) {
    alert("You must select at least one character type."); // Validates that pw contains at least 1 character type
    return;
  }

  // Ensure at least one character from each selected type
  allChars.forEach(charType => {
    const randomIndex = Math.floor(Math.random() * charType.length);
    password += charType[randomIndex];
  });

  const remainingLength = length - allChars.length;

  const combinedChars = allChars.join(",");    // creates a comma separated array from the chanracter type constants delcared in lines 4-7 ...
  const combinedArray = combinedChars.split("");    // .. i feel this is clumsy but it works!

  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    password += combinedArray[randomIndex];
  }


  document.getElementById("password").textContent = password;
}

// Add click event listener to the "Generate Password" button
document.getElementById("generate").addEventListener("click", generatePassword);
