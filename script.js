// declaring required elements

const startButton = document.querySelector(".start-button button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
// const resultBox = document.querySelector(".result-box");
// const optionList = document.querySelector(".option-list");
// const timer = document.querySelector("header .timer");
// const timeText = document.querySelector(".timer .time-txt");
// const timeCount = document.querySelector(".timer .timer-sec");
const queText = document.querySelector(".que-text");
const optionList = document.querySelector(".option-list");

//  Start quiz button clicked

startButton.onclick = () => {
  infoBox.classList.add("activeInfo");
};

//  Start exit quiz button clicked

exitButton.onclick = () => {
  infoBox.classList.remove("activeInfo");
};

// when continue button is clicked

continueButton.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
};

let queCount = 0;

function showQuestions(index) {
  let queTag = "<span>" + questions[index].question + "</span>";
  queText.innerHTML = queTag;
  let optionTag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option">' +
    questions[index].options[1] +
    "<span></span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";

  optionList.innerHTML = optionTag;
}
