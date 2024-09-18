// generate function to return a password

const generatePassword = (length, onlyNumbers) => {
    // Create a string of all the characters that can be used in the password
    let characters = '';
    if(onlyNumbers === true){
         characters = '0123456789';
    }else{
         characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    }
    

    // Initialize the password variable
    let password = '';

    // Create a for loop to create the password
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }

    // Return the password 
    return password;
}

module.exports = generatePassword;
