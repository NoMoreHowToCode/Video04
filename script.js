const loginBtnWrapper = document.querySelector(".loginBtnWrapper");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");

registerLink.addEventListener("click", ()=> {
    loginBtnWrapper.classList.add("active");  
});

loginLink.addEventListener("click", ()=> {
    loginBtnWrapper.classList.remove("active");
});


const loginBtnWrapperPopUp = document.querySelector(".loginBtn");
const loginBtnWrapperClose = document.querySelector(".closeIcon");

loginBtnWrapperPopUp.addEventListener("click", ()=> {
    loginBtnWrapper.classList.add("activeLoginBtnWrapper");
});

loginBtnWrapperClose.addEventListener("click", ()=> {
    loginBtnWrapper.classList.remove("activeLoginBtnWrapper");
});