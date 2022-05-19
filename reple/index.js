const com = document.querySelector("input#comment");
const Button = document.querySelector("button#bt");
const txtNode = document.createTextNode("좋아요!!!");
const newP = document.getElementsByTagName("p");
const rePle = document.querySelector(".reple");
const rePleB = document.querySelector("#rePle");
const Good = document.querySelector("button#good");
const Bad = document.querySelector("button#bad");

// newP.appendChild(txtNode);
Button.addEventListener("click", function (e) {
  const li = document.createElement("li");

  li.innerHTML = com.value;
  const cl = document.querySelector("#comments").appendChild(li);
  com.value = null;
  cl.addEventListener("click", function (e) {
    li.style.color = "purple";
    li.remove();
  });

  Good.addEventListener(
    "click",
    function (e) {
      const txtNode = document.createTextNode("좋아요!!!");
      rePle.appendChild(txtNode);
    },
    { once: true }
  );

  Bad.addEventListener(
    "click",
    function (e) {
      const txtNode = document.createTextNode("싫어요!!!");
      rePleB.appendChild(txtNode);
    },
    { once: true }
  );
});
