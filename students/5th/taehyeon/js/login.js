function checkValidation(idText, pwText) {
  //   if (!idText.includes("@")) {
  //     return false;
  //   }
  //   if (pwText.length >= 8) {
  //     return false;
  //   }
  return true;
}

function loginBtnActive() {
  const loginBtn = docoument.getElementsByClassName("login-btn")[0];
  loginBtn.style.backgroundColor = "#61ADED";
  loginBtn.style.cursor = "pointer";
}

const idInput = document.getElementsByClassName("identify")[0];
const pwInput = document.getElementsByClassName("password")[0];

idInput.addEventListener("input", () => {
  const idText = document.getElementsByClassName("identify")[0].value;
  const pwText = document.getElementsByClassName("password")[0].value;
  if (checkValidation(idText, pwText)) {
    loginBtnActive();
  }
});

pwInput.addEventListener("input", () => {
  const idText = document.getElementsByClassName("identify")[0].value;
  const pwText = document.getElementsByClassName("password")[0].value;
  if (checkValidation(idText, pwText)) {
    loginBtnActive();
  }
});
