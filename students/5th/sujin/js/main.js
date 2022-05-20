const inputInput = () =>{
   
}

document.querySelector(".search_cont .btn_innerSrh").addEventListener("click", function(){
    if( this.parentElement.classList.contains("off") ){
        this.parentElement.classList.remove("off");
        this.parentElement.classList.add("on");
        document.querySelector(".search_input").focus();
    } else {
        this.parentElement.classList.remove("on");
        this.parentElement.classList.add("off");
    }
})  

document.querySelector(".btn_closeSrh").addEventListener("click", ()=>{
    document.querySelector(".search_cont").classList.remove("on");
    document.querySelector(".search_cont").classList.add("off");
})