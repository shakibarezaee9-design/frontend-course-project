const question = document.querySelector(".faq-question");
const answer = document.querySelector(".faq-answer");

question.addEventListener("click", () => {

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }

});