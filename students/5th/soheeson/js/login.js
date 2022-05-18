// id와 pw가 모두 공백이 아니면 버튼 클릭 가능 , 컬러:블루
// id와 pw가 모두 공백이 아닌게 아니면(공백이면) 버튼 클릭 불가 , 컬러:스카이블루

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



