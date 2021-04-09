let navBtnOpen = document.querySelector('.open-btn');
let navBtnClose = document.querySelector('.close-btn');
let navWrap = document.querySelector('.nav-links');

navBtnOpen.addEventListener('click', ()=> {
   if (navWrap.style.left = '-80%') {
       
    navWrap.style.left = '0%'
    navBtnOpen.style.display = 'none'
    navBtnClose.style.display = 'block'
   }
});

navBtnClose.addEventListener('click', ()=> {
    if (navWrap.style.left = '0%') {
       
        navWrap.style.left = '-80%'
        navBtnOpen.style.display = 'block'
        navBtnClose.style.display = 'none'
       }
});
