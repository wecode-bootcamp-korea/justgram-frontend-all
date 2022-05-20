const comment = document.getElementById('comment');
const writeBtn = document.getElementById('write-btn');
const commentContainer = document.getElementsByClassName('feeds-comments')[0];
const feeds = document.getElementsByClassName('feeds')[0];
const heartDiv = document.getElementById('feed-heart');
const user = document.getElementById('user');
const myMenu = document.getElementById('my-menu');
const search = document.getElementById('search');
const searchUser = document.getElementById('search-user');

const userArr = [
  { 
    id:'Wecode', 
    nickname: '위코드'
  },
  { 
    id: 'Justcode',
    nickname: '저스트코드'
  },
  { 
    id: 'just',
    nickname: 'just'
  }
];

let h = 750;
writeBtn.disabled = true;

const activateBtn = () => {
  if (comment.value !== '') {
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
  const container = document.querySelector('.feeds-comments');
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="user-comment">
      <div>
        <span class="nickname"></span>
        <span class="comment-value"></span>
      </div>
      <div>
        <i class="fa-solid fa-heart" color="gray"></i>
        <button class="del-comment-btn">삭제</button>
      </div>
    </div>
  `;

  const btn = div.getElementsByTagName('button')[0];
  const div2 = div.getElementsByTagName('div')[0];
  const span = div.getElementsByTagName('span')[0];
  const span2 = div.getElementsByTagName('span')[1];

  span.textContent = 'im_jw';
  span2.textContent = ` ${comment.value}`;

  commentContainer.prepend(div);
  comment.value = '';
  writeBtn.disabled = true;
  writeBtn.style.cursor = 'auto';
  writeBtn.style.color = 'lightblue';

  h += 24.5;
  feeds.style.height = `${h}px`;

  div2.addEventListener('click', () => {
    const commentHeart = div2.getElementsByClassName('fa-heart')[0];
    if (commentHeart.style.color !== 'red') {
      commentHeart.style.color = 'red';
    } else if (commentHeart.style.color !== 'gray') {
      commentHeart.style.color = 'gray';
    }
  })

  btn.addEventListener('click', () => {
    container.removeChild(div);
    h -= 24.5;
    feeds.style.height = `${h}px`;
  })
}

const enterkey = () => {
  if (comment.value !== '' && window.event.keyCode === 13) {
    postComment();
  }
}

const changeColor = () => {
  const heartIcon = heartDiv.getElementsByClassName('fa-heart')[0]
  if (heartIcon.style.color !== 'red') {
    heartIcon.style.color = 'red';
  } else if (heartIcon.style.color !== 'gray') {
    heartIcon.style.color = 'gray';
  }
}

const toggleMyMenu = (e) => {
  if (myMenu.style.display !== 'block') {
    myMenu.style.display = 'block';
  } else if (myMenu.style.display !== 'none' && !e.target.closest('#my-menu')) {
    myMenu.style.display = 'none';
  }
}

const hideMyMenu = (e) => {
  if (myMenu.style.display !== 'none' && !e.target.closest('#user')) {
    myMenu.style.display = 'none';
  }
}

const matchUser = (value) => {
  const userInput = search.value.toLowerCase();
  const userName = value.toLowerCase().substr(0, userInput.length);
  return userName.includes(userInput) === true;
}

const makeUserDiv = (user) => {
  searchUser.style.opacity = '1';
  const filteredUser = document.createElement('div');
  filteredUser.className = 'user-card';
  filteredUser.innerHTML = `
      <div><img src="rudy.jpeg" id="search-img" alt="프로필 이미지" /></div>
      <div>
        <div id="search-username">${user.id}</div>
        <div id="search-subname">${user.nickname}</div>
      </div>
  `;
  searchUser.appendChild(filteredUser);
}

const showUser = () => {
  searchUser.innerHTML = '';
  searchUser.style.opacity = '0';
  if (search.value) {
    const filteredUserName = userArr.filter(x => matchUser(x.id));
    if (filteredUserName) {
      filteredUserName.forEach(function(e) {
        makeUserDiv(e);
      })
    }
  }
}

const backspaceKey = () => {
  if (window.event.keyCode === 8) {
    showUser();
  }
}

comment.addEventListener('keydown', activateBtn);
comment.addEventListener('keydown', enterkey);
writeBtn.addEventListener('click', postComment);
heartDiv.addEventListener('click', changeColor);
user.addEventListener('click', toggleMyMenu);
document.addEventListener('click', hideMyMenu);
search.addEventListener('keyup', showUser);
search.addEventListener('keypress', backspaceKey);
search.addEventListener('focusout', function() {
  searchUser.style.opacity = '0';
})