const inputComments = document.getElementsByClassName("feed_input");
Array.from(inputComments).forEach((inputComment, index) => {
  inputComment.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {
      writeComment(index);
    }
  });
});

const writeCommentButtons =
  document.getElementsByClassName("feed_input_button");
Array.from(writeCommentButtons).forEach((writeCommentButton, index) => {
  writeCommentButton.addEventListener("click", (e) => {
    writeComment(index);
  });
});

function writeComment(index) {
  const content = document.getElementsByClassName("feed_input")[index].value;

  const commentDiv = createCommentDiv("케빈", content);
  const commentGroup = document.getElementsByClassName("comment_group")[index];
  commentGroup.appendChild(commentDiv);
  document.getElementsByClassName("feed_input")[index].value = "";
  //   append는 여러 개
  //   appendChild는 1개
}

function createCommentDiv(writer, content) {
  const commentDiv = document.createElement("div");

  const writerSpan = document.createElement("span");
  const writerText = document.createTextNode(writer);
  writerSpan.appendChild(writerText);

  const commentSpan = document.createElement("span");
  const commentText = document.createTextNode(content);
  commentSpan.appendChild(commentText);

  commentDiv.append(writerSpan, " ", commentSpan);

  return commentDiv;
}
