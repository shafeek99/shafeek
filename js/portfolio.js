const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//how to auto change logo color in dark mode in js?
//   menu hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove mobile menu
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link,we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
// =================================================================

// ================= DARK LIGH=================================
const themeButton = document.getElementById("theme-button");
// const lightTheme = "light-theme";
// const iconTheme = "ri-sun-line";

// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// const getCurrentTheme = () =>
//   document.body.classList.contains(lightTheme) ? "light" : "dark";
// const getCurrentIcon = () =>
//   document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     lightTheme
//   );
//   themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
//     iconTheme
//   );
// }

// themeButton.addEventListener("click", () => {
//   document.body.classList.toggle(lightTheme);
//   themeButton.classList.toggle(iconTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });
themeButton.onclick = () => {
  if (themeButton.classList.contains("ri-sun-line")) {
    themeButton.classList.replace("ri-sun-line", "ri-moon-line");
    document.body.classList.add("active");
  } else {
    themeButton.classList.replace("ri-moon-line", "ri-sun-line");
    document.body.classList.remove("active");
  }
};
// ==========Swiper projects============
let swiperProjects = new Swiper(".projects__container",{
loop:true,
 spaceBetween:24,

 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
pagination:{
  el:".swiper-pagination",
},
breakpoints: {
1200: {
  slidesPerView:2,
  spaceBetween:-56,
},
},
}) 
// ==========email js=================
const contactForm = document.getElementById('contact-form')
const contactName =document.getElementById('contact-name')
const contactEmail =document.getElementById('contact-email')
const contactProject =document.getElementById('contact-project')
const contactMessage =document.getElementById('contact-message')

const sendEmail = (e) =>{
e.preventDefault()

// check if the field has a value
if(contactName.value ==='' ||contactEmail.value === '' ||contactProject.value === ''){
// add remove color
contactMessage.classList.remove('color-blue')
contactMessage.classList.add('color-red')
contactMessage.textContent ='write all theinput fields 📩' 
}else{
  emailjs.sendForm('service_m7j7hai','template_0l5jlp7','#contact-form','e6Ft-fnbX-1W4a2BS')
.then(()=>{
  contactMessage.classList.add('color-blue')
  contactMessage.textContent ='Message Sent✅'

  // remove message after five seconds
  setTimeout(() =>{
    contactMessage.textContent=''
  },5000)

},(error) =>{
 alert('OOPS!SOMETHING HAS FAILED...',error) 
})
// to clear the input 
contactName.value=''
contactEmail.value=''
contactProject.value=''
}
}
contactForm.addEventListener('submit',sendEmail) ; 
// scrollsection active
const section = document.querySelectorAll('section[id]')

function scrollActive () {
  const scrollY = window.pageYOffset

  section.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')
   
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
   })
}
window.addEventListener('scroll',scrollActive)
//=============== show scroll up================//
const ScrollUp =() =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp .classList.remove('show-scroll')
                     window.addEventListener('scroll',scrollUp)
}
 
// change background header
const scrollHeader = () =>{
const header = document.getElementById('header')

this.scrollY >= 50 ? header.classList.add('bg-header')
                  : header.classList.remove('bg-header')
 

}
window.addEventListener('scroll',scrollHeader)

// scroll reveal
  const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })
  sr.reveal(`.home__data,.projects__container,.footer__container`)
  sr.reveal(`.home__info div`,{ delay:600,origin:'bottom',interval:100})
  sr.reveal(`.skills__content:nth-child(1),.contact__content:nth-child(1)`,{ origin:'left'})
  sr.reveal(`.skills__content:nth-child(2),.contact__content:nth-child(2)`,{ origin:'right'})
  sr.reveal(`.qualification__content,.services__card`,{ interval:100})
