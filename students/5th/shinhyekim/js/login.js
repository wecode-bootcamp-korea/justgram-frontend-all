const $loginId = document.querySelector('.inputId');
const $loginPw = document.querySelector('.inputPw');
const $loginBtn = document.querySelector('.loginButton');


const loginAccess = () => {
  if($loginId.value == '' || $loginPw.value == '') {
    $loginBtn.disabled = true;
    $loginBtn.style.backgroundColor = '#c4e0fb';
  } else {
    $loginId.value !== '' && $loginPw.value !== '' ? $loginBtn.disabled = false : $loginBtn.disabled = true
    $loginBtn.style.backgroundColor = '#0095f6';
}
};

$loginId.addEventListener('keyup', loginAccess);
$loginPw.addEventListener('keyup', loginAccess);


