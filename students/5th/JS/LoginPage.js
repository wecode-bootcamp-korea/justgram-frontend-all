const thisIsAccount = document.getElementById("account")
const thisIsPw = document.getElementById("password")
const thisLogin = document.getElementById("loginbutton")



thisLogin.addEventListener("keyup",() => {
    let accountValue = thisIsAccount.value;
    let passwordValue = thisIsPw.value;

    let trueFalse = !accountValue || !passwordValue;

    return trueFalse? thisLogin.style.opcity="1":thisLogin.style.opcity="0.5"
});