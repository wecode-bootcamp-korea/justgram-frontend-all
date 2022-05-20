const email = document.getElementById("email");
const pw = document.getElementById("pw");
const loginBtn = document.getElementById("btn_login");

let valId = false;
let valPw = false;

email.addEventListener("keyup", (e) => {
    if ( e.currentTarget.value.includes("@") ){
        valId = getValueValidation(e.currentTarget.value);
    } else {
        valId = false;
    }
});
pw.addEventListener("keyup", (e) => {
    if( e.currentTarget.value.length > 4 ){
        valPw = getValueValidation(e.currentTarget.value);
    } else {
        valPw = false;
    }
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
