// 댓글 내용 입력 후, 엔터 혹은 버튼 클릭 시 댓글 추가

const writeBtn = document.getElementsByClassName('comment__write-btn')[0];
const writerId = document.getElementsByClassName('comment__writer-id')[0];
const writerContent = document.getElementsByClassName('comment__writer-content')[0];
const writeInput = document.getElementsByClassName('comment__write')[0];

writeBtn.addEventListener('click',(event) => {
  writeComment();
  writeInput.value = '';
});

writeInput.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    writeComment();
    writeInput.value = '';
  } 
});

function writeComment(){
  const commentArea = document.getElementsByClassName('comment__contents-group')[0];
  const commentDiv = document.createElement('div');
  const commentId = document.createElement('span');
  const commentContents = document.createElement('span');
  
  commentDiv.className = 'comment__writer'
  commentId.className = 'bold comment__writer-id'
  commentContents.className ='comment__writer-content'

  commentId.textContent = '아이디';
  commentContents.textContent = writeInput.value;

  commentArea.appendChild(commentDiv);
  commentDiv.appendChild(commentId);
  commentDiv.appendChild(commentContents);
}
