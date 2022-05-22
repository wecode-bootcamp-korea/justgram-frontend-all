const thisIsComment = document.getElementsByClassName('enter-input')[0];
const postButton = document.getElementsByClassName('post-button')[0];

function enterComment(comment){
    const spanTag1 = document.createElement('span');
    const spanTag2 = document.createElement('span');
    spanTag1.className = 'comment-id';
    spanTag2.className = 'comment-content';
    spanTag1.innerHTML = 'sangmin';
    spanTag2.innerText = ' ' + comment;

    const divTag1 = document.createElement('div');
    divTag1.appendChild(spanTag1);
    divTag1.appendChild(spanTag2);

    const iTag1 = document.createElement('i');
    iTag1.className = "fa-regular fa-heart";
    const iTag2 = document.createElement('i');
    iTag2.className = "fa-regular fa-trash-can";

    const divTag2 = document.createElement('div');
    divTag2.appendChild(iTag1);
    divTag2.appendChild(iTag2);

    const liTag = document.createElement('li');
    liTag.className = 'comment-li'
    liTag.appendChild(divTag1);
    liTag.appendChild(divTag2);

    document.getElementById('comment-list').appendChild(liTag);

    thisIsComment.value = '';
}


thisIsComment.addEventListener('keydown', function(e){
    const comment = thisIsComment.value;
    if(comment.length > 0){
        postButton.style.opacity = 1;
    }
    else{
        postButton.style.opacity = 0.4;
    }

    if(e.keyCode === 13 && comment.length > 0){
        enterComment(comment);
        postButton.style.opacity = 0.4;
    }
})

postButton.addEventListener('click', function(){
    const comment = thisIsComment.value;
    if(comment.length > 0){
        enterComment(comment);
        postButton.style.opacity = 0.4;
    }
})

