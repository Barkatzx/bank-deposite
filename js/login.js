//Step 01: Add Event Handler With Submit Button
document.getElementById('btn-submit').addEventListener('click', function(){
// Step 02: Get The Email Address Inside The Email Input Field
// Always Remember To Use (.value) To Get Text From An Input Field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
//  Step 03: Get Password
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
//DANGER: Do Not Verify Password On The Client Side
// Step 04: Verify Email And Password
    if(email === 'barkat@ph.com' && pass === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Your Email and Password is Incorrect')
    }
})