const thisIsLogo = document.getElementsByClassName('img-logo');
const thisIsId = document.getElementById('user-id');
const thisIsPassword = document.getElementById('password');
const thisIsLoginBtn = document.getElementById('login-btn');
const thisIsLoginBtnAct = document.getElementById('login-btn-act');

function activateBtn() {
	const userId = thisIsId.value;
	const password = thisIsPassword.value;
	
	if(userId.length > 0 && password.length > 0) {
		thisIsLoginBtn.disabled = false;
		thisIsLoginBtn.style.cursor = "pointer";
		// add link
	} else {
		thisIsLoginBtn.disabled = true;
		thisIsLoginBtn.style.cursor = "";

	}
}


thisIsId.addEventListener('keyup', activateBtn);
thisIsPassword.addEventListener('keyup', activateBtn);



