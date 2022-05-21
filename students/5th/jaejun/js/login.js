console.log("js/login.js 실행 시작");

function checkValidation(idText, pwText) {
  if (idText.length === 0 || pwText.length === 0) {
    return false;
  }

  // mission 5 로직

  return true;
}

function loginBtnChange(isActive) {
  const loginBtn = document.getElementsByClassName("login-btn")[0];
  if (isActive) {
    loginBtn.style.backgroundColor = "#61ADED";
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.style.cursor = "default";
  }
}

const idInput = document.getElementsByClassName("identify")[0];
const pwInput = document.getElementsByClassName("password")[0];

idInput.addEventListener("input", () => {
  const idText = document.getElementsByClassName("identify")[0].value;
  const pwText = document.getElementsByClassName("password")[0].value;

  // idText, pwText 옳은지 아닌지 확인하는 로직
  if (checkValidation(idText, pwText)) {
    loginBtnChange(true);
  } else {
    loginBtnChange(false);
  }
});

pwInput.addEventListener("input", () => {
  const idText = document.getElementsByClassName("identify")[0].value;
  const pwText = document.getElementsByClassName("password")[0].value;

  // idText, pwText 옳은지 아닌지 확인하는 로직
  if (checkValidation(idText, pwText)) {
    loginBtnChange(true);
  } else {
    loginBtnChange(false);
  }
});

console.log("js/login.js 실행끝");
