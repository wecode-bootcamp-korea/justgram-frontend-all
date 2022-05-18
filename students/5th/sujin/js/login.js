const email = document.getElementById("email");
const pw = document.getElementById("pw");
const loginBtn = document.getElementById("btn_login");

let valId = false;
let valPw = false;

email.addEventListener("keyup", (e) => {
    valId = getValueValidation(e.currentTarget.value);
});
pw.addEventListener("keyup", (e) => {
    valPw = getValueValidation(e.currentTarget.value);
})
const getValueValidation = (value) => {
    let valid = false;
    if (value != null && value != "") {
       valid = true;   
    }
    return valid;
}

document.addEventListener("keyup", () => {
    valId && valPw ? loginBtn.disabled = false : loginBtn.disabled = true;
});


/* document.addEventListener("keyup", () => {
    let valId = document.getElementById('email').value;
    let valPw = document.getElementById('pw').value;
    if (valPw != "" && valId != "") {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}); */


// const loginInput = () => {}
// loginInput();


// email.addEventListener("keyup", (e) => {
//     if( e.currentTarget.value != null && e.currentTarget.value != "" ){
//         valId = true;
//     } else {
//         valId = false;
//     }
// });
// pw.addEventListener("keyup", (e) => {
//     if( e.currentTarget.value != null && e.currentTarget.value != "" ){
//         valPw = true;
//     } else {
//         valPw = false;
//     }
// });


// email.addEventListener('keyup', function () {
//     valId = getValueValidation(this.value);
// });
// pw.addEventListener('keyup', function () {
//     valPw = getValueValidation(this.value);
// })
// function getValueValidation(value) {
//    var valid = false;
//    if (value != null && value != "") {
//       valid = true;   
//    }
//    return valid;
// }


