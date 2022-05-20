const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pw');
const loginBoxButton = document.querySelector('.login-box button');


// ID와 PW가 모두 공백이 아닐 시, 버튼 활성화
function buttonColorChange() {
    if(idInput.value !== "" && pwInput.value !== ""){
        loginBoxButton.disabled = true;
        loginBoxButton.style.backgroundColor = 'rgb(0, 117, 255)';
        loginBoxButton.style.cursor= 'pointer';
    } else{
        loginBoxButton.disabled = false;
        loginBoxButton.style.backgroundColor = 'rgb(196, 225, 251)';
        loginBoxButton.style.cursor= 'auto';
    }
};


idInput.addEventListener('keyup', () => { buttonColorChange(); });
pwInput.addEventListener('keyup', () => { buttonColorChange(); });