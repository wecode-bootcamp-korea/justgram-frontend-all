const id = document.querySelector(".input_id");
const pw = document.querySelector(".input_pass");
const btn = document.querySelector(".login_btn");

id.addEventListener("change", btnHandler);

function btnHandler(params) {
  if (id.value && pw.value) {
    btn.disabled = false;
  }
}
