const id = document.getElementById('id')
const pw = document.getElementById('pw')
const login_button = document.getElementById('login-button')

id.addEventListener('input',() => {
 console.log(id.value,pw.value)
 if(id.value.length>=1 && pw.value.length>=1){
  login_button.classList.add('active')
 }else{
  login_button.classList.remove('active')
 }
})

pw.addEventListener('input',() => {
    console.log(id.value,pw.value)
    if(id.value.length>=1 && pw.value.length>=1){
     login_button.classList.add('active')
    }else{
     login_button.classList.remove('active')
    }
   })
