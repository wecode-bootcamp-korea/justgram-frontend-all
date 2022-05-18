//각각 한글자이사 입력되면 활성화

const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('password');
const loginButton = document.getElementById('button-login');

thisIsId.addEventListener('keyup', function(){
  const id = thisIsId.value;
  const pw = thisIsPw.value;

  if(id.length > 0 && pw.length > 0){
    loginButton.style.opacity = 1;
  }
  else{
    loginButton.style.opacity = 0.4;
  }
})

thisIsPw.addEventListener('keyup', function(){
  const id = thisIsId.value;
  const pw = thisIsPw.value;

  if(id.length > 0 && pw.length > 0){
    loginButton.style.opacity = 1;
  }
  else{
    loginButton.style.opacity = 0.4;
  }
})
