$loginBtn.addEventListener("click", (event) => {
  if (
    $username.value.indexOf("@") === -1 ||
    $password.value.length < 5 ||
    $password.value !== $repassword.value
  ) {
    alert("아이디 또는 비밀번호를 확인해주세요.");
  } else if ($password.value !== reg_crabz) {
    alert("비밀번호는 영문,숫자,특수문자(!@#$%)로 6~12자로 해야합니다");
  } else {
    alert(`${$username.value.split("@")[0]}님 환영합니다.`);
  }
});
