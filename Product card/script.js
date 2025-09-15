const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');


dateElement.innerText = `${year}-${month}-${day}`;

timeElement.innerText = `${hours}:${minutes}:${seconds}`;

// --- Navigation Toggle ---
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");


if (navUl.classList.contains("show")) {
hamburger.innerHTML = '<i class="fas fa-times" style="font-size: 37px; color: #fff; padding: 15px; "></i>';
}

else {
hamburger.innerHTML = '<i class= fas fa-bars"></i>';
}


});

// --- Dark/Bright Mood Toggle ---
const body = document.body;
const toggleIcon = document.getElementById("moon");

toggleIcon.addEventListener("click", () => {
    body.classList.toggle("bright-mood");


    if (body.classList.contains("bright-mood")) {
        toggleIcon.innerHTML = '<i class="fas fa-moon" ></i>';
    } else {
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
});



//---secction active cl ss hover----

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.onscroll = () => {

const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;
const offset = 100;
const scrollY = window.pageYOffset;


sections.forEach((section, index) => {


if(scrollY >= sectionTop - offset && scrollY < sectionTop + sectionHeight) {


navLi.forEach((li) => {
li.classList.remove("active");
});
navLi[index].classList.add("active");

}

});

};

// window onscroll animations

//const sections = document.querySelectorAll("section");

//window.onscroll = () => {

//sections.forEach((section) => {

//const sectionTop = section.offsetTop;
//const sectionHeight = section.offsetHeight;
//const offset = 100;
//const scrollY = window.pageYOffset;


//if(scrollY >= sectionTop - offset && scrollY < sectionTop + sectionHeight){

//section.classList.add("contentshow");
//}

////else {
//section.classList.remove("contentshow");
//}


//});

//};
//typing elements about me

const typingElement = document.getElementById("typingelement");
let typeText = ["frontend Developers", "UI/UX Designers","Online Tutors"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < typeText[textIndex].length) {
    typingElement.textContent += typeText[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    textIndex++;
    charIndex = 0;
    
    if (textIndex >= typeText.length) {
      textIndex = 0;
    }
    
    setTimeout(() => {
      typingElement.textContent = "";
      typeEffect();
    }, 2000);
  }
}

typeEffect();


//contactc form validations

const form = document.getElementById("user-form");


const sendBtn = document.getElementById("sendmessage");


const name = document.getElementById("name").Value.trim();

const message = document.getElementById("message");

const email = document.getElementById("email").Value.trim();

const select = document.getElementById("select");

const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

