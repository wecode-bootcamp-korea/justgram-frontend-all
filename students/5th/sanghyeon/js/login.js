const inputId = document.querySelector('.idBox');
const inputPw = document.querySelector('.passwordBox');
const loginBtn = document.querySelector('.btnLogin');

//id에 입력에 있고 pw가 8자 이상이면 로그인버튼 활성화 함수

inputPw.addEventListener('keydown', () => {
    if(inputId.value && inputPw.value.length>=8) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#0095F6';
    }
    else{
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = '#C0DFFD';
    }
    
});
