const thisIsLogo = document.getElementsByClassName('img-logo');
const thisIsId = document.getElementById('user-id');
const thisIsPassword = document.getElementById('password');
const thisIsLoginBtn = document.getElementById('login-btn');
let userId;

function activateLoginBtn() {
	const userId_attempt = thisIsId.value;
	const password_attempt = thisIsPassword.value;
	
	if(userId_attempt.length > 0 && password_attempt.length > 0) {
		thisIsLoginBtn.disabled = false;
		thisIsLoginBtn.style.cursor = "pointer";
		// add link
	} else {
		thisIsLoginBtn.disabled = true;
		thisIsLoginBtn.style.cursor = "";
	}
}

function login() {
	const userId_attempt = thisIsId.value;
	const password_attempt = thisIsPassword.value;

	if (users[userId_attempt] === password_attempt) {
		userId = userId_attempt;
		return true;
	}
	userId = "anonymous"; 
	return false;
}

function getUserId() {
	if(login()) return thisIsId.value;
	return "anonymous";
}

thisIsId.addEventListener('keyup', activateLoginBtn);
thisIsPassword.addEventListener('keyup', activateLoginBtn);
thisIsLoginBtn.addEventListener('click', login);

