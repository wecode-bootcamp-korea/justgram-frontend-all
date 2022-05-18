// 로그인 버튼 활성 & 비활성화

const loginBtn = document.getElementsByClassName("loginBtn")[0];
const loginId = document.getElementsByClassName("loginId")[0];
const loginPw = document.getElementsByClassName("loginPw")[0];

function btnEvent(){
 if (loginId.value && loginPw.value) {
  loginBtn.removeAttribute("disabled");
  loginBtn.style.backgroundColor = ("rgba(0,149,246,1)");
 } else if (loginId.value || loginPw.value) {
  loginBtn.getAttribute("disabled");
  loginBtn.style.backgroundColor = ("rgba(0,149,246,.3)");
 }
};

loginId.addEventListener('keyup',btnEvent);
loginPw.addEventListener('keyup',btnEvent);
