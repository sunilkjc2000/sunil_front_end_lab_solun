class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.index = 0;
    }
    getQuestionByIndex() {
      return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
      let question = this.getQuestionByIndex();
      if (question.isCorrectAnswer(answer)) {
        this.score++;
      }
      this.index++;
    }
    isEnded() {
      return this.index === this.questions.length;
    }
  }
  
  class Question {
    constructor(questionText, choices, answer) {
      this.text = questionText;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
      return this.answer === selectedChoice;
    }
  }
  
  let questions = [
    new Question(
      "Who is the current Prime Minister of India?",
      ["Indira Gandhi", "Narendra Modi", "Devegowda", "Manmohan Singh"],
      "Narendra Modi"
    ),
    new Question(
      "JavaScript Supports?",
      ["Functions", "XHTML", "CSS", "HTML"],
      "Functions"
    ),
    new Question(
      "Who is the best Batsmen in India?",
      ["Virat", "Rahul", "Dhawan", "Rishabh"],
      "Virat"
    ),
    new Question(
      "Which language got maximum follwers?",
      ["JavaScript", "Java", "Phython", "Go"],
      "JavaScript"
    ),
    new Question(
      "What is the national animal of India?",
      ["Tiger", "Lion", "Elephat", "Cheetha"],
      "Tiger"
    ),
    new Question(
      "Which of the following is used in pencil?",
      ["Graphite", "Magnesium", "Iron", "Aluminium"],
      "Graphite"
    ),
    new Question(
      "Which company acquired Great Learning?",
      ["Upgrad", "Byjus", "Udemy", "Abacus"],
      "Byjus"
    ),
    new Question(
      "What does JSON stand for ?",
      [
        "Java Simple Object Notation",
        "JavaScript Object Notation",
        "Java Semi Object Notation",
        "None of the above",
      ],
      "JavaScript Object Notation"
    ),
  ];
  
  function loadQuestions() {
    if (quiz.isEnded()) {
      showFinalScores();
      return;
    }
  
    let currentQuestion = quiz.getQuestionByIndex();
    let questionElement = document.getElementById("question"); //<p id="question"></p>
    questionElement.innerHTML = currentQuestion.text;
  
    let displayedChoices = currentQuestion.choices;
    for (let i = 0; i < displayedChoices.length; i++) {
      let eachChoiceElement = document.getElementById("choice" + i); //<span id="choice0"></span
      eachChoiceElement.innerHTML = displayedChoices[i];
  
      let eachChoiceBtn = document.getElementById("btn" + i); //<button id="btn0"></button>
      eachChoiceBtn.onclick = function () {
        quiz.checkForCorrectAnswer(displayedChoices[i]); // Verification, scoring and incrementing the question index
        loadQuestions();
      };
    }
  
    showProgress();
  }
  
  let quiz = new Quiz(questions);
  loadQuestions();
  
  function showFinalScores() {
    let resPercent = (quiz.score / questions.length) * 100;
    let scoresHTML = `
          <h1>Results... </h1>
          <h2 id='score'>Your Score is :- ${quiz.score} </h2>
          <h2> And overall percentage is :- ${resPercent}% </h2>
          <h1>Congratulations!!!</h1>
      `;
    let quizCanvas = document.getElementById("quiz");
    quizCanvas.innerHTML = scoresHTML;
  }
  
  function showProgress() {
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
  }