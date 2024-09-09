// function sub() {
//     // input
//     const username = document.getElementById('name').value;
//     const password = document.getElementById('pass').value;

//     // credentials
//     const validUsername = 'admin';
//     const validPassword = '12345';

//     // validating credentials
//     if (username == validUsername && password == validPassword) {
//         // Redirect to another page on successful logiton
//         window.location.href = 'todo.html'; // Change 'success.html' to your target page
//         return true; // Prevent form submission
//     } else {
//         // Show error message
//         document.getElementById('message').textContent = 'Invalid username or password.';
//         return false; // Prevent form submission
//     }
// }


var user = document.getElementById('us');
var pass = document.getElementById('pa');
var userr = document.getElementById('err1');
var paerr = document.getElementById('err2');

function validate(callback) {
    
    let isValid = true;
    
    if (user.value== '' || pass.value== '') {
        alert("Please enter the username and password to login");
        isValid = false; // Set isValid to false if fields are empty
    }
    
    if (user.value == 'admin') {
        userr.innerText = "Username is valid";
        userr.style.color = 'green';
    } else {
        userr.innerText = "Username is not valid";
        userr.style.color = 'red';
        isValid = false; // Set isValid to false if username is incorrect
    }
    if (pass.value == 12345) {
        paerr.innerText = "Password is valid";
        paerr.style.color = 'green';
    } else {
        paerr.innerText = "Password is not valid";
        paerr.style.color = 'red';
        isValid = false; // Set isValid to false if password is incorrect
    }
    
    if (isValid) {
        callback(); 
    }
    return false; 
}

function mainpage() {
    window.location.href = '/ToDoList/mainpage.html'; 
}

document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    validate(mainpage); 
};