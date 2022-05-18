const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pw');
const loginBoxButton = document.querySelector('.login-box button');

function buttonColorChange() {
    if(idInput.value !== "" && pwInput.value !== ""){
        loginBoxButton.style.backgroundColor = 'rgb(0, 117, 255)';
    } else{
        loginBoxButton.style.backgroundColor = 'rgb(196, 225, 251)';
    }
};

idInput.addEventListener('keyup', () => { buttonColorChange(); });
pwInput.addEventListener('keyup', () => { buttonColorChange(); });