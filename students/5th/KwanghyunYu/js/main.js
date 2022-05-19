const input = document.querySelector(".comment-input");
const button = document.querySelector(".comment-submit");
const Id = "Mad1403";
const feeds_comment = document.querySelector(".feeds-comments");
const heart = document.querySelector(".heart");
const remove = document.querySelector(".delete");
const userMenu = document.querySelector(".nav-icons-user-menu");
const userIcon = document.querySelector(".user-icon");
heart.addEventListener("click", () => {
  heart.classList.toggle("fa-solid");
});
userIcon.addEventListener("click", () => {
  userMenu.classList.toggle("util-flex");
});
input.addEventListener("keyup", () => {
  button.style.color = "#3797f0";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const newId = document.createElement("span");
    const newDiv = document.createElement("div");
    const newComment = document.createElement("p");
    const newCommentDiv = document.createElement("div");
    const newHeart = document.createElement("i");
    const newDelete = document.createElement("i");
    const newButtonDiv = document.createElement("div");
    if (input.value) {
      newComment.innerHTML = input.value;
      newComment.style.width = "300px";
      newHeart.classList.add("fa-regular", "fa-heart", "heart");
      newHeart.style.color = "#b4b4b4";
      newDelete.classList.add("fa-solid", "fa-xmark");
      newDelete.style.color = "#b4b4b4";
      newDelete.style.marginRight = "10px";

      newButtonDiv.append(newDelete, newHeart);
      newButtonDiv.style.marginRight = "10px";

      newCommentDiv.append(newId, newComment);
      newCommentDiv.style.display = "flex";

      newDiv.style.display = "flex";
      newDiv.style.justifyContent = "space-between";
      newDiv.style.marginLeft = "10px";
      newDiv.style.marginBottom = "5px";

      newId.innerHTML = Id;
      newId.style.fontWeight = 600;
      newId.style.marginRight = "5px";

      newDiv.append(newCommentDiv, newButtonDiv);
      feeds_comment.append(newDiv);

      input.value = null;
      button.style.color = "#c8e3fb";
    }
    newHeart.addEventListener("click", () => {
      newHeart.classList.toggle("fa-solid");
    });

    newDelete.addEventListener("click", () => {
      newDelete.parentElement.parentElement.remove();
    });
  });
});
