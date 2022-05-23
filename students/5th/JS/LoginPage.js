const thisIsAccount = document.getElementById("account")
const thisIsPw = document.getElementById("password")
const thisLogin = document.getElementById("loginbutton")



function btnEvent(){
    if (thisIsAccount.value && thisIsPw.value) {
        thisLogin.removeAttribute("disabled");
     
    } }
    thisIsAccount.addEventListener('keyup',btnEvent);
    thisIsPw.addEventListener('keyup',btnEvent);