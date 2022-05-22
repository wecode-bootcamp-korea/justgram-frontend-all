//각각 한글자이사 입력되면 활성화

const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('password');
const loginButton = document.getElementById('button-login');

function loginValidation(){//id : "@" 포함, pw : 5글자이상
  const id = thisIsId.value;
  const pw = thisIsPw.value;

  if(id.includes("@") && pw.length >= 5){
    loginButton.style.opacity = 1;
  }
  else{
    loginButton.style.opacity = 0.4;
  }
}

thisIsId.addEventListener('keyup', () => loginValidation())
thisIsPw.addEventListener('keyup', () => loginValidation())
