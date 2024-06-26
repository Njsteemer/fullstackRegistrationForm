var loginFrom = document.getElementById("login");
var registerForm = document.getElementById("register");
var slider = document.getElementById("slider-wrapper");

function register(){
    loginFrom.style.left = "-400px";
    registerForm.style.left = "50px";
   slider.style.left = "110px";
}

function login(){
    loginFrom.style.left = "50px";
    registerForm.style.left = "450px";
   slider.style.left = "0";
}
