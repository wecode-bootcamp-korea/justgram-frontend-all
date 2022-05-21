// element.createTextNode(arg) 메서드를 이용해서 댓글 내용을 요소에 추가할 수 있다.
const commentValue = document.getElementsByClassName("write_comment")[0];
const writeCommentBtn = document.getElementsByClassName("write_comment_btn")[0];

writeCommentBtn.addEventListener("mouseup", () => {
  writeComment("lshyun955", commentValue.value);
});
commentValue.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    writeComment("lshyun955", e.target.value);
  }
});

//appendChild
function writeComment(writer, content) {
  // 1. 현재 input 태그요소 접근
  if (content.length) {
    const commentBox = document.getElementsByClassName("feed_comment")[0];
    // 2. 현재 댓글의 마지막에 댓글 추가를 위해 댓글 목록 요소 접근 => commentArr.length로
    const commentDiv = document.createElement("div");
    // element.classList.add(arg1...argN) 메서드를 이용해 생성되는 element에 클래스도 부여할 수 있다.
    const divForA = document.createElement("div");
    const commentContent = document.createElement("span");
    const writerA = document.createElement("a");
    const commentLikeDiv = document.createElement("div");
    const commentLikeBtn = document.createElement("button");
    const likeImage = document.createElement("i");

    const writerNickname = document.createTextNode(writer);
    const comm = document.createTextNode(content);

    writerA.setAttribute("href", "#");
    commentLikeBtn.classList.add("comment_like_btn");
    likeImage.classList.add("fa-regular", "fa-heart", "like", "fa-xl");
    commentContent.classList.add("comment_content");
    commentDiv.classList.add("comment_style");

    divForA.appendChild(writerA);
    divForA.appendChild(commentContent);
    commentLikeBtn.appendChild(likeImage);
    commentLikeDiv.appendChild(commentLikeBtn);
    commentDiv.appendChild(divForA);
    commentDiv.appendChild(commentLikeDiv);

    writerA.appendChild(writerNickname);
    commentContent.appendChild(comm);
    commentBox.appendChild(commentDiv);

    // 댓글을 입력하면 댓글 창에 입력했던 내용을 지우자.
    commentValue.value = "";
  } else {
    alert("댓글 내용을 입력해주세요!");
  }
}
