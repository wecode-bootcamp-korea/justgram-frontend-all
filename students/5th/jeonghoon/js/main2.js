const textBox = document.querySelector(".inputBox"); //input 변수 할당
const summitButtonClick = document.querySelector(".buttonBox"); //버튼 변수 할당
const feedComment = document.querySelector(".new_comments"); // 새로운 댓글이 달릴 div 할당
const profileId1 = document.querySelector(".my_profile_id"); //s_sewon 이름 할당

summitButtonClick.addEventListener("click", clickButton);

function clickButton() {
  const commentBox = document.createElement("span");
  const profileId = document.createElement("span");
  const br = document.createElement("br");
  commentBox.className = "newCommentBox";
  commentBox.innerHTML = textBox.value;
  profileId.className = "newCommentBox1";
  profileId.innerHTML = "s_sewon";

  if (textBox.value !== "" && textBox.value.trim() !== "") {
    feedComment.appendChild(profileId) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}

// 엔터 쳤을때 댓글 기능 추가
textBox.addEventListener("keypress", enter);

function enter(e) {
  const commentBox = document.createElement("span");
  const profileId1 = document.createElement("span");
  const br = document.createElement("br");
  const profileId = document.querySelector(".my_profile_id");
  const textBoxTrim = textBox.value.trim();
  profileId1.className = "newCommentBox1";
  commentBox.className = "newCommentBox";
  profileId1.innerHTML = "s_sewon";
  commentBox.innerHTML = textBox.value;

  if (
    textBox.value !== "" &&
    textBox.value.trim() !== "" &&
    e.key === "Enter"
  ) {
    feedComment.appendChild(profileId1) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}

textBox.addEventListener("keydown", colorChange);

function colorChange() {
  if (textBox.value !== "" && textBox.value.trim() !== "") {
    summitButtonClick.style.color = "#0095F6";
  } else if (textBox.value.trim() == "") {
    return (summitButtonClick.style.color = "#C0E0FD");
  }
}
