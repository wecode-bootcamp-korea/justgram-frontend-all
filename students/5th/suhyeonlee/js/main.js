// 초기 상태 : 비활성화

const idValue = document.getElementById("id");
const pwValue = document.getElementById("password");
const buttonTag = document.getElementsByClassName("button-tag")[0];

// 아이디, 패스워드 체크 함수
const lenghtCheck = () => {
  if (idValue.value && pwValue.value) {
    buttonTag.setAttribute("style", "background-color:#0095f6");
    buttonTag.style.cursor = "pointer";
    buttonTag.removeAttribute("disabled");
  } else {
    buttonTag.setAttribute("style", "background-color:##c0dffd");
    buttonTag.disabled = true;
  }
};

// 아이디, 패스워드 validation 함수
// 아이디 : @ 포함 여부
// 패스워드 : 5글자 이상.
const logingValidation = () => {
  if (idValue.value.indexOf("@") !== -1 && pwValue.value.length >= 5) {
    alert(`${idValue.value.split("@")[0]}님 로그인 되었습니다! `);
  } else {
    alert("로그인 실패하였습니다.");
  }
};

// 좋아요 클릭 함수

// 댓글 작성 함수

// 댓글 좋아요 함수

// 대댓글 작성 함수

idValue.addEventListener("keyup", lenghtCheck);
pwValue.addEventListener("keyup", lenghtCheck);
buttonTag.onclick = logingValidation;
