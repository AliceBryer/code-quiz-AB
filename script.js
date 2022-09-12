// declaring required elements

const startButton = document.querySelector(".start-button button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const timer = document.querySelector("header .timer");
const timeText = document.querySelector(".timer .time-txt");
const timeCount = quizBox.querySelector(".timer .timer-sec");
const queText = document.querySelector(".que-text");
const optionList = document.querySelector(".option-list");
const nextButton = document.querySelector(".next-button");

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
  startTimer(60);
};

let queCount = 0;
let counter;

nextButton.onclick = () => {
  if (queCount < questions.length - 1) {
    queCount++;
    showQuestions(queCount);
  } else {
    gameOver();
  }
};

function showQuestions(index) {
  let queTag =
    "<span>" +
    questions[index].number +
    ". " +
    questions[index].question +
    "</span>";
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
  const option = optionList.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  let allOptions = optionList.children.length;

  if (userAns === correctAns) {
    answer.classList.add("correct");
    console.log("answer is correct");
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is incorrect");
  }

  // disabling selections once user has picked choice

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add(".disabled");
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    timeCount.textContent = time;
    time--;
  }
}

function gameOver() {
  console.log("game over");
  quizBox.classList.remove("activeQuiz");
  infoBox.classList.remove("activeInfo");
}
