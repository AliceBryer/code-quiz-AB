// declaring required elements

const startButton = document.querySelector(".start-button button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const optionList = document.querySelector(".option-list");
const timer = document.querySelector("header .timer");
const timeText = document.querySelector(".timer .time-txt");
const timeCount = document.querySelector(".timer .timer-sec");

//  Start quix button clicked

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
};
