// Strings that will be concatenated 
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefthijklmnopqrstuvwxyz";
const numChar = "0123456789";
const specialChar = "!@#$%^&<>*()_+~`|}{[]:;?,./-=";

// Adding the event listener to the button and calling the main function
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {   
    // Setting up concat and final password strings
    let passwordCharSet = "";
    let userPassword = "";
    
    // Ask user for character length
    const passLength = prompt("How many characters would you like your password to be? (between 8 and 128 characters)").trim();
    
    // check if user input is a number between 8 and 128
    if(passLength >= 8 && passLength <= 128){

        // Confirm user choices
        const lowercase = confirm("Do you want to include lowercase letters?");
        const uppercase = confirm("Do you want to include Uppercase letters?");
        const numbers = confirm("Do you want to include numbers?");
        const special = confirm("Do you want to include special characters?");

        // Concatenate strings if confirms are true
        if (lowercase) {
            passwordCharSet += lowerChar;
        }
        if (uppercase) {
            passwordCharSet += upperChar;
        }
        if (numbers) {
            passwordCharSet += numChar;
        }
        if (special) {
            passwordCharSet += specialChar;
        }

        // check if no options are selected
        if(!lowercase && !uppercase && !numbers && !special){
            alert("You must choose at least one option!!");
            generatePassword();
            userPassword = "";
            return;
        }

        // loop through the concatenated string the number of times the user chose and randomize selections
        for (let i = 0; i < passLength; i++) {
            userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
        }

        // Add the new password to the html and change the color
        const yourSecurePassword = document.getElementById("password");
        yourSecurePassword.textContent = userPassword.replace("<", "&lt").replace(">", "&gt");
        document.getElementById("password").style.color = "rgb(69, 69, 69)";

    } else {
        alert("You must choose a number between 8 and 128 characters!!");
        generatePassword();
    }
}