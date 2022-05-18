/*function loginChk() {
  var id = document.getElementById("id");
  var pw = document.getElementById("pw");

  if (!id.value) {
    alert("아이디를 입력해 주십시오.");
    return;
  }

  if (!pw.value) {
    alert("비밀번호를 입력해 주십시오.");
    return;
  }
}
*/
let id = document.getElementById("id");
let password = document.getElementById("pw");
let loginChk = document.getElementsByClassName("login-btn")[0];

password.addEventListener("keyup", checkIdPassword);
id.addEventListener("keyup", checkIdPassword);

function checkIdPassword() {
  if (id.value.length > 0 && pw.value.length > 0) {
    loginChk.style.backgroundColor = "blue";
    loginChk.style.cursor = "pointer";
  } else {
    loginChk.disabled = true;
  }
}
