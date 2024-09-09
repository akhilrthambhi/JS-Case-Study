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

function handleLogin() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    
    if (username === 'admin' && password === '12345') {
        window.location.href = 'todo.html'; 
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
}

document.getElementById('log').addEventListener('click', handleLogin);
