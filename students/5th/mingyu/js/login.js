'use strict';

const inputId = document.getElementsByClassName('input-id')[0];
const inputPw = document.getElementsByClassName('input-password')[0];
const btn = document.getElementsByClassName('button-login')[0];

inputId.addEventListener('keyup', buttonActive)
inputPw.addEventListener('keyup', buttonActive)

function buttonActive () {
    if (inputId.value !== '' && inputPw.value !== '') {
        btn.disabled = false;
        btn.style.backgroundColor = '#0096f6';
    }
    else {
        btn.disabled = true;
        btn.style.backgroundColor = '#c0dffd';
    }
}