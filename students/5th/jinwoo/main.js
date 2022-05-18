const comment = document.getElementById('comment');
const writeBtn = document.getElementById('write-btn');
const commentContainer = document.getElementsByClassName('feeds-comments')[0];
const feeds = document.getElementsByClassName('feeds')[0];

let h = 790;
writeBtn.disabled = true;

const activateBtn = () => {
  if (comment.value !== '') {
    console.log(1);
    writeBtn.disabled = false;
    writeBtn.style.cursor = 'pointer';
    writeBtn.style.color = 'blue';
  } else {
    writeBtn.disabled = true;
    writeBtn.style.cursor = 'auto';
    writeBtn.style.color = 'lightblue';
  }
}

const postComment = () => {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const span2 = document.createElement("span");

  div.className = 'user-comment';
  span.className = 'nickname';
  span2.className = 'comment-value';

  span2.innerHTML = ` ${comment.value}`;
  span.innerHTML = 'im_jw';


  div.appendChild(span);
  div.appendChild(span2);
  commentContainer.prepend(div);
  comment.value = '';
  writeBtn.disabled = true;
  writeBtn.style.cursor = 'auto';
  writeBtn.style.color = 'lightblue';

  h += 24.5;
  feeds.style.height = `${h}px`;
}

const enterkey = () => {
  if (comment.value !== '' && window.event.keyCode == 13) {
    postComment();
  }
}


출처: https://cofs.tistory.com/12 [CofS]

comment.addEventListener('keydown', activateBtn);
comment.addEventListener('keydown', enterkey);
writeBtn.addEventListener('click', postComment);