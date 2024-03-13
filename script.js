// // keep track of previous scroll position
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', function () {
//     // current scroll position
//     const currentScrollPos = window.scrollY;

//     if (prevScrollPos > currentScrollPos) {
//         // user has scrolled up
//         document.querySelector('.navbar').classList.add('show');
//     } else {
//         // user has scrolled down
//         document.querySelector('.navbar').classList.remove('show');
//     }

//     // update previous scroll position
//     prevScrollPos = currentScrollPos;
// });

const menuCloseBtn = document.getElementById("closebtnicon")
const menuOpenBtn = document.getElementById("menuopenicon")

menuCloseBtn.addEventListener('click', function() {
    // toggle menu close functionality here
    document.querySelector('.menu-wrapper').classList.remove('show');
    // document.body.style.overflowY = 'visible';
    
});

menuOpenBtn.addEventListener('click', function() {
    // toggle menu open functionality here
    document.querySelector('.menu-wrapper').classList.add('show');
    // document.body.style.overflowY = 'hidden';

}); 

// menuCloseBtn.addEventListener('click', function() {
//     // toggle menu close functionality here
//     document.querySelector('.menu-wrapper').classList.remove('show');
    
// });

// menuOpenBtn.addEventListener('click', function() {
//     // toggle menu open functionality here
//     document.querySelector('.menu-wrapper').classList.add('show');
// });