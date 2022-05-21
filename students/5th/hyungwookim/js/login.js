console.log("자바스크립트 실행");

const idInput = document.getElementsByClassName("identify")[0];
const pwInput = document.getElementsByClassName("password")[0];
/* mission 5
function checkValidation(idText, pwText){
    if(!idText.includes("@")){
        return false;
    }
    if(pwText.length < 8){
        return false;
    }
    return true;
}*/

function checkValidation(idText, pwText){
    if(idText.length ===0 || pwText.length === 0) {
        return false
    } 
    return true
}

function loginBtnChange(isActive){
    const loginBtn = document.getElementsByClassName("login_btn")[0];
    if (isActive) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.style.cursor ="pointer"
    } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.style.cursor ="default"
    }
}


idInput.addEventListener("input", () => {
    const idText = document.getElementsByClassName("identify")[0].value;
    const pwText = document.getElementsByClassName("password")[0].value;
// id, pw 옳은지 아닌지
    if (checkValidation(idText, pwText)) {
        loginBtnChange(true);
    }   else {
        loginBtnChange(false);
}
}
)

pwInput.addEventListener("input", () => {
    const idText = document.getElementsByClassName("identify")[0].value;
    const pwText = document.getElementsByClassName("password")[0].value;
// id, pw 옳은지 아닌지
    if (checkValidation(idText, pwText)){
        loginBtnChange(true);
    }   else {
        loginBtnChange(false);
}
}
)
