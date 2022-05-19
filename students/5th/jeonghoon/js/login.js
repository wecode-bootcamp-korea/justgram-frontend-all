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
