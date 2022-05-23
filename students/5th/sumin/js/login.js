// 로그인 버튼 활성 & 비활성화

const login__btn = document.getElementsByClassName("login__btn")[0];
const login__id = document.getElementsByClassName("login__id")[0];
const login__pw = document.getElementsByClassName("login__pw")[0];

function btnEvent(){
 if (login__id.value && login__pw.value) {
  login__btn.removeAttribute("disabled");
  login__btn.style.backgroundColor = ("rgba(0,149,246,1)");
 } else if (login__id.value || login__pw.value) {
  login__btn.getAttribute("disabled");
  login__btn.style.backgroundColor = ("rgba(0,149,246,.3)");
 }
};

login__id.addEventListener('keyup',btnEvent);
login__pw.addEventListener('keyup',btnEvent);
