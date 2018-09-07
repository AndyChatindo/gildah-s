var joinbutton = document.getElementById('r');
var agreeCheckbox = document.getElementById('agree');


function check(){
    if (agreeCheckbox.checked == true){
        joinbutton.disabled = false;               
    }
    else{
        joinbutton.disabled = true;
    }
}

function logIn(){
    document.getElementById("signUp").style.display = "block";
}

function off(){
    document.getElementById("signUp").style.display = "none";
}

function pass() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("forgotPassword").style.display ="block";
        }

function passOff() {
    document.getElementById("forgotPassword").style.display ="none";
}

function message(){
    document.getElementById("message").style.display = "block"
}
function messageoff(){
    document.getElementById("message").style.display = "none"
}
            // Get the modal
var m = document.getElementById("signUp");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(click) {
if (click.target == m) {
    m.style.display = "none";
}
}
