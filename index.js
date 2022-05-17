const passWord = document.querySelector("input#password");
passWord.addEventListener("keyup", function (e) {
  const pw = document.querySelector("input#name").value;
  const rpw = document.querySelector("input#password").value;
  const Button = document.querySelector("button#bt");

  if (pw.length > 0 && rpw.length > 0) {
    Button.disabled = false;
    Button.style.cursor = "pointer";
    Button.style.backgroundColor = "#1c7ed6"; //0095F6
    Button.addEventListener("click", function (e) {
      alert("로그인");
    });
  } else {
    Button.disabled = true;
    Button.style.cursor = "default";
    Button.style.backgroundColor = "#bfdffd";
    // document.querySelector("p.alert").innerHTML = "각 칸을 입력하세요!!!";
  }

  // if (pw === null) {
  //   document.querySelector("p.alert").innerHTML = "";
  // } else {
  //   alert("전화번호, 사용자 이름 또는 이메일을 입력하세요");
  // }
});

Button.addEventListener("click", function (e) {
  alert("로그인");
});
