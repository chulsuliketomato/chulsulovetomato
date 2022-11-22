const toggleBtn = document.querySelector('.nav_toogleBtn');
const menu = document.querySelector('.nav');



toggleBtn.addEventListener('click',() =>{
  menu.classList.toggle('active');
  
});