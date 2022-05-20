// ID, PW 입력 시 로그인 버튼 활성화 기능
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchInput.addEventListener('keyup',(e) => {
    if (searchInput.value !== "") {
        searchIcon.style.display = 'none';
    } else{
        searchIcon.style.display = 'block';       
    }
});

// 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가
const commentWrite = document.querySelector('.comment-write');
const commentButton = document.querySelector('.comment-btn');
const commentList = document.querySelector('.comment-list');


commentButton.addEventListener('click', () => {
    if(commentWrite.value.length > 0){
        saveComment();

        commentWrite.value = "";
    }
});

commentWrite.addEventListener('keyup', (e) => {
    if(commentWrite.value.length > 0 && e.code === 'Enter'){
        saveComment();
        commentWrite.value = "";
    }
});

function saveComment(){

    const userName = document.querySelector('.user-name');
    const createA = document.createElement('a'); 
    createA.setAttribute( 'class', 'feed-bold-txt' )
    createA.setAttribute( 'href', ' ' )
    const writeA = document.createTextNode(userName.innerText)
    createA.appendChild(writeA);

    const createSpan = document.createElement('span');
    const writeSpan = document.createTextNode(commentWrite.value);
    createSpan.appendChild(writeSpan);

    const createLi = document.createElement('Li');
    createLi.append(createA, " ", writeSpan);

    commentList.append(createLi);
};