const ID = document.getElementsByClassName("IdInput")[0];
const PW = document.getElementsByClassName("PassInput")[0];
const BT = document.getElementsByClassName("Button")[0];

ID.addEventListener('input',()=>{if(ID.value && PW.value) {
    BT.disabled = false;
    BT.style.backgroundColor='#0095F6';
}})
PW.addEventListener('input',()=>{if(ID.value && PW.value) {
    BT.disabled = false;
    BT.style.backgroundColor='#0095F6';
}})