const input = document.querySelector(".user-input");
const button = document.querySelector(".login-button");
let isIdValid = false;
let isPwValid = false;
button.disabled = true;

input.addEventListener("keyup", (event) => {
  if (event.target.className === "input-id") {
    event.target.value.includes("@") ? (isIdValid = true) : (isIdValid = false);
  }

  if (event.target.className === "input-password") {
    event.target.value.length > 4 ? (isPwValid = true) : (isPwValid = false);
  }

  if (isIdValid && isPwValid) {
    button.style.backgroundColor = "#61ADED";
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.style.backgroundColor = "#aed4ea";
    button.disabled = true;
  }
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "./main.html";
});
