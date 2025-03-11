const questions = document.querySelectorAll(".question");
questions.forEach( function (question) {
  question.addEventListener("click", function () {
    const answerId = this.getAttribute('data-target');
    const answer = document.getElementById(answerId);

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';

    } else { 
      answer.style.display = 'none';
    }
  })
})

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", function() {
    toggleMenu();
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

menuItems.forEach(function (menuItem) {
  event.preventDefault();

  const targetSection = document.querySelector(menuItem.getAttribute("href"));
  targetSection.scrollIntoView({
    behavior: "smooth", 
    block: "start"
  }); 
  toggleMenu()
});
