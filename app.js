
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefthijklmnopqrstuvwxyz";
var numChar = "0123456789"
var specialChar = "!@#$%^&*()_+~`|}{[]:;?,./-=";


document.getElementById("button").addEventListener("click", generatePassword);


function generatePassword() {
    
    var userPassword = "";
    var passwordCharSet = "";
    
    var passLength = prompt("How many characters would you like your password to be? (between 8 and 128 characters)").trim();
    console.log(passLength); // take this out when finished
    if(passLength >= 8 && passLength <= 128){

        
        var lowercase = confirm("Do you want to include lowercase letters?");
        console.log(lowercase);


        var uppercase = confirm("Do you want to include Uppercase letters?");
        console.log(uppercase);


        var numbers = confirm("Do you want to include numbers?");
        console.log(numbers);


        var special = confirm("Do you want to include special characters?");
        console.log(special);


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

        if(!lowercase && !uppercase && !numbers && !special){
            alert("You must choose at least one option!!");
            generatePassword();
            userPassword = "";
            return;
        }

        for (let i = 0; i < passLength; i++) {
            userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
        }

        console.log(userPassword);
        var yourSecurePassword = document.getElementById("passBox");
        yourSecurePassword.innerHTML = userPassword;
        document.getElementById("passBox").style.color = "rgb(69, 69, 69)";

    } else {
        alert("You must choose a number between 8 and 128 characters!!");
        generatePassword();
    }

}