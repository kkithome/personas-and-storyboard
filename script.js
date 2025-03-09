document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
        const questionContainer = this.closest('.question-container');
        const answerContainer = questionContainer.querySelector('answer-container');


        if (answerContainer && answerContainer.classList.contains("answer-container")) {
            answerContainer.classList.toggle("visible");

            const arrow = this.querySelector(".arrow");
            
            if (answerContainer.classList.contains("visible")) {
                arrow.textContent = " 🔼 ";
            } else {
                arrow.textContent = " 🔽 ";
            }
        }
    });
});
});

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
