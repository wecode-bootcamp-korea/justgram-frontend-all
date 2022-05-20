const Button = document.querySelector("#pro");
const button = document.querySelector("#disappear");
const conTents = document.querySelector(".contents");
const Pro = document.querySelector(".profile");
const con = document.querySelector(".profile_1");
const item = document.querySelector(".item1");
Pro.style.display = "block";
Button.addEventListener("click", function () {
  console.log("aaaa");
  // conTents.classList.toggle("item");
  Pro.style.display = "block";
});

button.addEventListener("click", function () {
  Pro.style.display = "none";
});

// const profileMenuBtn = document.querySelector("#pro");
// const profilePopups = document.querySelectorAll(".profile");
// let isOpenMenu = false;

// document.body.addEventListener("click", (event) => {
//   if (isOpenMenu) {
//     // profilePopups[0].style.display = "none";
//     // profilePopups[1].style.display = "none";
//     profilePopups.style.display = "none";
//     isOpenMenu = false;
//   }
// });

// profileMenuBtn.addEventListener("click", (event) => {
//   if (!isOpenMenu) {
//     // profilePopups[0].style.display = "block";
//     profilePopups.style.display = "block";
//     setTimeout(() => {
//       isOpenMenu = true;
//     }, 100);
//   } else {
//     // profilePopups[0].style.display = "none";
//     profilePopups.style.display = "none";
//     isOpenMenu = false;
//   }
// });
