const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchInput.addEventListener('keyup',(e) => {
    if (searchInput.value !== "") {
        searchIcon.style.display = 'none';
    } else{
        searchIcon.style.display = 'block';       
    }
});