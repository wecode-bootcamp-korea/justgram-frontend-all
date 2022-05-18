const input = document.querySelector(".comment-input");
const button = document.querySelector(".comment-submit");
const Id = "Mad1403";
const feeds_comment = document.querySelector(".feeds-comments");
input.addEventListener("change", () => {
  button.addEventListener("click", (e) => {
    if (input.value) {
      const newId = document.createElement("span");
      const newDiv = document.createElement("div");
      const newComment = document.createElement("p");
      e.preventDefault();
      newDiv.style.display = "flex";
      newDiv.style.marginLeft = "10px";
      newDiv.style.marginBottom = "5px";
      newId.innerHTML = Id;
      newId.style.fontWeight = 600;
      newComment.innerHTML = input.value;
      newId.style.marginRight = "5px";
      feeds_comment.append(newDiv);
      newDiv.append(newId, newComment);
      feeds_comment.append(newDiv);
      input.value = null;
    }
  });
});
