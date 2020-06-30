// Strings that will be concatenated 
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefthijklmnopqrstuvwxyz";
var numChar = "0123456789";
var specialChar = "!@#$%^&<>*()_+~`|}{[]:;?,./-=";

// Adding the event listener to the button and calling the main function
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {   
    // Setting up concat and final password strings
    var passwordCharSet = "";
    var userPassword = "";
    
    // Ask user for character length
    var passLength = prompt("How many characters would you like your password to be? (between 8 and 128 characters)").trim();
    
    // check if user input is a number between 8 and 128
    if(passLength >= 8 && passLength <= 128){

        // Confirm user choices
        var lowercase = confirm("Do you want to include lowercase letters?");
        var uppercase = confirm("Do you want to include Uppercase letters?");
        var numbers = confirm("Do you want to include numbers?");
        var special = confirm("Do you want to include special characters?");

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
        var yourSecurePassword = document.getElementById("password");
        yourSecurePassword.textContent = userPassword.replace("<", "&lt").replace(">", "&gt");
        document.getElementById("password").style.color = "rgb(69, 69, 69)";

    } else {
        alert("You must choose a number between 8 and 128 characters!!");
        generatePassword();
    }
}