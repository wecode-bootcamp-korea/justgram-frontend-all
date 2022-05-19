const com = document.querySelector("input#comment");
const Button = document.querySelector("button#bt");
const arr = [];
Button.addEventListener("click", function (e) {
  document.querySelector("p#result").innerHTML = com.value;
  arr.push(com.value);

  const list = arr.map(function (e) {
    const element = [];
    element.push(e);
    return element;
  });
  document.querySelector("p#result").innerHTML = list;
  com.value = null;
});
