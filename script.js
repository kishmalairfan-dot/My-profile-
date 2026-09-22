// Typing Effect

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Frontend Learner"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const role = document.getElementById("role");

function typeEffect() {

  if (typing) {
    role.textContent = roles[roleIndex].substring(0, charIndex++);
    if (charIndex > roles[roleIndex].length) {
      typing = false;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    role.textContent = roles[roleIndex].substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, typing ? 100 : 50);
}

typeEffect();


// Sticky Navbar

window.addEventListener("scroll", () => {

  document.querySelector("header").classList.toggle("sticky", window.scrollY > 50);

});


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(section => {

    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);
revealSections();
    