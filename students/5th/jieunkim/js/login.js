const thisIsLogo = document.getElementsByClassName('img-logo');
const thisIsId = document.getElementById('user-id');
const thisIsPassword = document.getElementById('password');
const thisIsLoginBtn = document.getElementById('login-btn');
const thisIsLoginBtnAct = document.getElementById('login-btn-act');

function activateBtn() {
	const userId = thisIsId.value;
	const password = thisIsPassword.value;
	
	if(userId.length > 0 && password.length > 5) {
		//thisIsLoginBtn.style.backgroundColor = '#0095f6';
		thisIsLoginBtn.id = "login-btn-act";
		thisIsLoginBtn.style.cursor = "pointer";
		// add link
	} else {
		//thisIsLoginBtn.style.backgroundColor = '#b2dffc';
		thisIsLoginBtn.id = "login-btn";
		thisIsLoginBtn.style.cursor = "";

	}
}


thisIsId.addEventListener('keyup', activateBtn);
thisIsPassword.addEventListener('keyup', activateBtn);



