const thisIdentify=document.getElementById('identify');
const thisPassword=document.getElementById('password');
const thisLoginBtn=document.getElementsByClassName('login-btn')[0];

thisIdentify.addEventListener("input",toggleLoginBtn)
thisPassword.addEventListener("input",toggleLoginBtn)

function toggleLoginBtn(){
    if(thisIdentify.value.length>0 && thisPassword.value.length>0){
        thisLoginBtn.removeAttribute('disabled');
    }else{
        thisLoginBtn.setAttribute('disabled','disabled');
    }
}
