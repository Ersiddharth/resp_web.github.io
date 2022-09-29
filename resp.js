burger=document.querySelector('.burger')  /*he querySelector() method returns the first element that matches a CSS selector.

                                           To return all matches (not only the first), use the querySelectorAll() instead.*/
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navlist')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

