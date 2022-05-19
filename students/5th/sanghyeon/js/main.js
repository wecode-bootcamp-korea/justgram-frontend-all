const submitBtn = document.querySelector('.submitBtn');
const tInput = document.querySelector('.tInput');
const comments = document.querySelector('.comments')

//댓글 추가 함수
const submit = ()=>{
    const text= document.createElement('p');
    text.innerHTML = tInput.value;
    comments.appendChild(text);
    tInput.value=null;
}

//게시버튼 클릭시 댓글추가 기능
submitBtn.addEventListener('click', submit);

//enter버튼 입력시 댓글 추가 기능
tInput.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter'){
        submit();
    };
});