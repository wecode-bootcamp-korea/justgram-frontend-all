// id와 pw가 모두 공백이 아니면 버튼 클릭 가능 , 컬러:블루
// id와 pw가 모두 공백이 아닌게 아니면(공백이면) 버튼 클릭 불가 , 컬러:스카이블루
/*
console.log("javascript 실행")
function checkValidation(idText, pwText) {
    if (!idText.length === 0 || pwText.length === 0 ) {
        return false;
    }
    if(pwText.length < 8) {
    }
    return true;
}

const idInput = document.getElementsByClassName('id')[0];
const pwInput = document.getElementsByClassName('pw')[0];
const loginBoxButton = document.getElementsByClassName('login-button')[0];

idInput.addEventListener('input', (event) =>  {
    const idText = document.getElementsByClassName("id")
    const pwText = document.getElementsByClassName("pw")
    if (checkValidation(idText, pwText)) {
        const loginBtn = doucument.getElementsByClassName
    }
});

pwInput.addEventListener('input', (event) =>  {
    const idText = document.getElementsByClassName("id")
    const pwText = document.getElementsByClassName("pw")
});

function
*/


const idInput = document.getElementsByClassName('id')[0];
const pwInput = document.getElementsByClassName('pw')[0];
const loginBoxButton = document.getElementsByClassName('login-button')[0];

idInput.addEventListener('keyup', function() {buttonColorChange();});
pwInput.addEventListener('keyup', function() {buttonColorChange();});

function buttonColorChange() {
    if(idInput.value !== "" && pwInput.value !== ""){
        loginBoxButton.disabled = false;
        loginBoxButton.style.backgroundColor = '#0095F6';
    } else{
        loginBoxButton.disabled = true;
        loginBoxButton.style.backgroundColor = '#c4e1fb';
    }
};