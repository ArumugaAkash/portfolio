const roles = ["Web Developer", "Programmer"];
let currentindex = 0;
let isDeleting = false;
let charIndex = 0;
const roleElement = document.getElementById('role');
const typingSpeed = 37;
const deletingSpeed = 35;
const pauseDuration = 1150;
const pauseDuration2 = 3;

function type() {
    let currentRole = roles[currentindex];
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            currentindex = (currentindex + 1) % roles.length;
            setTimeout(type, pauseDuration2); // pause before typing the next word
        } 
        else {
            setTimeout(type, deletingSpeed);
        }
    } 
    else {
        roleElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(type, pauseDuration); // pause before deleting
        } 
        else {
            setTimeout(type, typingSpeed);
        }
    }
}

type();

const menu = document.querySelector('.menu');
const menuList=document.querySelector('nav ul')
menu.addEventListener('click',()=>{
        menuList.classList.toggle('showmenu')
})

// const menu = document.querySelector('.menu')
// const menuList=document.querySelector('#toggle')
// menu.addEventListener('click',()=>{
//     menuList.classList.toggle('showmenu')
// })


// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }








//     function underlinetext(event, id) {
//         document.querySelectorAll('.display-content p').forEach(p => {
//             p.parentElement.classList.remove('underline');
//         });
//         document.getElementById(id).parentElement.classList.add('underline');
//     }
    
//     document.addEventListener("DOMContentLoaded", function() {
//         document.getElementById("homelink").classList.add("underline");
//         location.hash = '#home';
//     });



    
//     document.addEventListener("scroll", function() {
//         const sections = document.querySelectorAll("div[id]");
//         const navLinks = document.querySelectorAll(".display-content a");
        
//         // You can adjust this value to control when the underline appears
//         const triggerPoint = 0.5; // 0.5 means 50% of the screen's height
    
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             const sectionTop = rect.top;
//             const sectionHeight = rect.height;
//             const viewportHeight = window.innerHeight;
//             const triggerPosition = viewportHeight * triggerPoint;
    
//             if (sectionTop <= triggerPosition && sectionTop + sectionHeight > triggerPosition) {
//                 const sectionId = section.getAttribute("id");
//                 navLinks.forEach(link => {
//                     const linkText = link.getElementsByTagName("p")[0];
//                     if (link.getAttribute("href").substring(1) === sectionId) {
//                         linkText.parentElement.classList.add("underline");
//                     } else {
//                         linkText.parentElement.classList.remove("underline");
//                     }
//                 });
//             }
//         });
//     });