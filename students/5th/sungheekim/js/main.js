const thisCommentInput=document.getElementById("addComment");
const thisComments=document.getElementsByClassName("comments")[0];
const thisCommentBtn=document.getElementsByClassName('upload-btn')[0];

thisCommentInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
    addComment();
}
})

thisCommentInput.addEventListener("input",addCommentBtn)

function addComment(){
    let inputValue=thisCommentInput.value.trim();
    if(inputValue.length>0){
        let element=document.createElement('div');
        element.classList.add('comment');
        element.innerHTML=`     <span><b>billmarie</b> ${inputValue}</span>
        <img class="likeIt"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">`
        thisComments.append(element);
        thisCommentInput.value='';
        thisCommentBtn.setAttribute('disabled','disabled');
    }
}

function addCommentBtn(){
    if(thisCommentInput.value.trim().length>0){
        thisCommentBtn.removeAttribute('disabled');
    }else{
        thisCommentBtn.setAttribute('disabled','disabled');
    }
}
