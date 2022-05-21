
const inputComments = document.getElementsByClassName("comment_input");

Array.from(inputComments).forEach((inputComment, index) => {
  inputComment.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
      writeComment(index);
    }
  });
});

const writeCommentButtons = document.getElementsByClassName("write_comment_button");

Array.from(writeCommentButtons).forEach((writeCommentButton, index) => {
  writeCommentButton.addEventListener("click", () => {
    writeComment(index);
  });
});

// 여기까지 이벤트 감지.

function writeComment(index) {
  const commentInput = document.getElementsByClassName("comment_input")[index];
  const commentDiv = createCommentDiv("hyungwookim", commentInput.value);
  const commentGroup = document.getElementsByClassName("comment_group")[index];
  commentGroup.appendChild(commentDiv);
  commentInput.value = "";
}

function createCommentDiv(writer, content) {
  const commentDiv = document.createElement("div");
  commentDiv.setAttribute("class","new_comment")
  const writerSpan = document.createElement("span"); // <span></span>
  const writerText = document.createTextNode(writer);
  writerSpan.setAttribute("class", "new_comment_text")
  writerSpan.appendChild(writerText); // <span>writer</span>

  const commentSpan = document.createElement("span");
  const commentText = document.createTextNode(content);
  commentSpan.appendChild(commentText); // <span>content</span>

  commentDiv.append(writerSpan, " ", commentSpan);
  // <div><span>writer</span> <span>content</span></div>

  return commentDiv;
}