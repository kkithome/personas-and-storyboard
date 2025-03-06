document.addEventListener("DOMConetenLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((questions, index) => {
        questions.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle("visible");

            const arrow = this.querySelector(".arrow");

            if (answer.classList.contain("visible")) {
                arrow.textContent = " 🔼 "; 
            } else {
                arrow.textContent = " 🔽 ";
            }
        });
    });
});