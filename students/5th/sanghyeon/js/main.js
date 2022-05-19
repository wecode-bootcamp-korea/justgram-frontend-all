const submitBtn = document.querySelector('.submitBtn');
const tInput = document.querySelector('.tInput');
const comments = document.querySelector('.comments');
const heartBtn=document.querySelector('.like');
const heart=document.querySelector('.heart')


//댓글 추가 함수 + 삭제기능의 버튼 추가

const submit = ()=>{

    //아무 것도 입력 안했을 때 alert

    if (tInput.value===''){
        alert('최소 1글자 이상 입력해주세요!!')
        return;
    }

    const items= document.createElement('p');
    items.setAttribute('class','items');
    
    const text= document.createElement('span');
    text.setAttribute('class','text');
    text.innerHTML = tInput.value;
    
    //삭제기능 버튼 추가

    const delBtn=document.createElement('button');
    delBtn.setAttribute('class','delBtn');
    delBtn.innerHTML='삭제';
    delBtn.addEventListener("click",()=>{
        comments.removeChild(items)
    });

    //댓글에 좋아요 기능 추가
    const cHeart =document.createElement('img');
    cHeart.setAttribute('class','cHeart');
    cHeart.src="../img/heart.png"
    cHeart.addEventListener('click',()=>{
            if (onOff){
                cHeart.src="../img/binheart.png";
                onOff=false;
            }
            else{
                cHeart.src="../img/heart.png";
                onOff=true;
            }
    });

    //게시후 input창 초기화

    tInput.value=null;

    //아이템 추가

    items.appendChild(text);
    items.appendChild(delBtn);
    items.appendChild(cHeart);
    comments.appendChild(items);
}

//피드 하트 좋아요 함수
let onOff = true;
const heartLike = () =>{
    if (onOff){
        heart.src="../img/binheart.png";
        onOff=false;
    }
    else{
        heart.src="../img/heart.png";
        onOff=true;
    }   
}
//댓글 하트 좋아요 함수의 변수
let cOnOff = true;


//게시버튼 클릭시 댓글추가 기능
submitBtn.addEventListener('click', submit);

//enter버튼 입력시 댓글 추가 기능
tInput.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter'){
        submit();
    };
});

//피드에 하트 좋아요 기능 추가

heart.addEventListener('click', ()=>{
    heartLike();
});



