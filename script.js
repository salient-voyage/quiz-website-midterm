const questions = [
  {
    question: "The famous name crafted by the OVP for its supposed recipients of confidential funds.",
    options: ["Dina Bonnevie", "Krizette Chu", "Mary Grace Piattos", "Jimmy Neutron" ],
    correctAnswer: "Mary Grace Piattos"
  },
  {
    question: "A senator who is known for being \"in heat\".",
    options: ["Robin Padilla", "Richard Gutierrez", "Ricci Rivero", "Richie D'Horsie"],
    correctAnswer: "Robin Padilla"
  },
  {
    question: "A former lawyer in the Philippines known for saying \"mga b*b*!\".",
    options: ["Grand Pabbie", "Larry Gadon", "Jingoy Estrada", "Bato Dela Rosa"],
    correctAnswer: "Larry Gadon"
  },
  {
    question: "Who said the following statement? \n\"Hindi ko po makakalimutan na makita ang inyong mga ngiti makita mayayo ama kayo mmm na kayo ay mag alamano kayo ay nasa inyong sigaw.\"",
    options: ["Jose Rizal", "Ferdinand \"Bongbong\" Marcos Jr.", "Rodrigo Duterte", "Jose Manalo"],
    correctAnswer: "Ferdinand \"Bongbong\" Marcos Jr."
  },
  {
    question: "Which Filipino politician is known for saying the following quote? \n\"This country is going to hell because we are led by a person who doesn't know how to be a president, who is a liar.\"",
    options: ["Sebastian Duterte", "Risa Hontiveros", "Sara Duterte", "Bato dela Rosa"],
    correctAnswer: "Sara Duterte"
  },
  {
    question: "Fill in the blank: \n\"She may not like my answer, she may not like how I answer, she may not like the content of my answer, but I am ________.\"",
    options: ["Explaining", "Answering", "Complaining", "Apologizing"],
    correctAnswer: "Answering"
  },
  {
    question: "What is the title of the book authored by Vice President Sara Duterte, which is centered on themes of friendship and unity?",
    options: ["Isang Kaibigan", "Ang Pag-asa ng Bayan", "Sa Kabila ng Lahat", "Tahanan ng Pagkakaisa"],
    correctAnswer: "Isang Kaibigan"
  },
  {
    question: "During a campaign speech, what creature dared to interrupt President Duterte?",
    options: ["A rat", "A cockroach", "A lizard", "A butterfly"],
    correctAnswer: "A cockroach"
  },
  {
    question: "Fill in the blank: \n 'Hindi na po ito laban ng Duterte at Marcos! Ang laban po ngayon ay pwersa ng ______ laban sa pwersa ng ______!'",
    options: ["Kalabasa at Kangkong", "Kadiliman at Kasamaan", "Kpop at Kdrama", "Kabutihan at Kasamahan"],
    correctAnswer: "Kadiliman at Kasamaan"
  },
  {
    question: "According to Alice Guo, where did she grow up?",
    options: ["Sa Shenzhen Sorting Center", "Sa Farm", "Sa Cornelia Street", "Sa Bamban, Tarlac"],
    correctAnswer: "Sa Farm"
  },
  {
    question: "Who said, 'Baliw na baliw kayo sa research! Aanhin niyo ba ang research?'",
    options: ["Manny Villar", "Mark Villar", "Camille Villar", "Cynthia Villar"],
    correctAnswer: "Cynthia Villar"
  },
  {
    question: "Which politician went viral for requesting confidential funds using the phrase \"For peace and order in our classroom\"?",
    options: ["Loren Legarda", "Sara Duterte", "Gloria Macapagal-Arroyo", "Leni Robredo"],
    correctAnswer: "Sara Duterte"
  },
  {
    question: "Who said this phrase:\n 'Wala akong alam diyan, pero kung gusto niyo, magre-research ako sa TikTok!'?",
    options: ["Mocha Uson", "Harry Roque", "Salvador Panelo", "Sara Duterte"],
    correctAnswer: "Mocha Uson"
  },
  {
    question: "Which Senatorial Aspirant in 2022 was rebutted by Atty. Luke Espirito using the line 'Dapat tinuturo sa school na masama ang extrajudicial killings, masama ang red-tagging, masama si Marcos, marami siyang human rights violations. Noong panahon– .Binuksan mo ang usapan, 'wag mo kong pagbawalan!'??",
    options: ["Harry Roque", "Larry Gadon", "Jinggoy Estrada", "Raffy Tulfo"],
    correctAnswer: "Larry Gadon"
  },
  {
    question: "Who said the phrase: \n 'Peso is not weak because peso is weak. The peso is weak because the dollar is strong.'?",
    options: ["Vinny Marcos", "Joseph Marcos", "Sandro Marcos", "Bongbong Marcos"],
    correctAnswer: "Sandro Marcos"
  },
  {
    question: "Who is the Vice President who went viral for saying 'Naku, kawawa ka naman' to a netizen due to the spread of fake news about a spliced video?",
    options: ["Jejomar Binay", "Sara Duterte", "Leni Robredo", "Gloria Macapagal-Arroyo"],
    correctAnswer: "Leni Robredo"
  },
  {
    question: "Fill in the blanks: \n'Be a hero, ________.'",
    options: ["Withdraw", "Fly", "Surrender", "Go home"],
    correctAnswer: "Withdraw"
  },
  {
    question: "Where was Former President Rodrigo Duterte taken after being arrested?",
    options: ["Sahig", "The Hague", "Banig", "North Korea"],
    correctAnswer: "The Hague"
  },
  {
    question: "Which presidential candidate in 2022 used 'two joints'?",
    options: ["Rosmar Tan", "Isko Moreno", "Leni Robredo", "Manny Pacquiao"],
    correctAnswer: "Isko Moreno"
  },
  {
    question: "Who among the children of the Former President Duterte became viral about the 'Wake and Bake' post?",
    options: ["Sara Duterte", "Kitty Duterte", "Sebastian Duterte", "Paolo Duterte"],
    correctAnswer: "Kitty Duterte"
  }
];

const scoreSound = new Audio('budots.mp3');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let darkMode = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const questionNumberElement = document.getElementById("question-number");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");

  // Update question number
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  // Clear options and create new ones
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    
    // Check if user has already answered this question
    if (userAnswers[currentQuestionIndex] && option === userAnswers[currentQuestionIndex]) {
      button.classList.add('selected-option');
    }
    
    // Always allow clicking to change answer
    button.onclick = () => checkAnswer(option);
    
    optionsElement.appendChild(button);
  });

  // Show next button if user has answered the current question
  nextButton.style.display = userAnswers[currentQuestionIndex] ? "inline-block" : "none";
  
  // Clear result text
  resultElement.textContent = "";
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  
  // Save user's answer (overwriting any previous answer)
  userAnswers[currentQuestionIndex] = selectedAnswer;

  const optionButtons = optionsElement.querySelectorAll('.option');

  optionButtons.forEach(button => {
    // Remove any previous selection styling
    button.classList.remove('selected-option');
    
    // Only highlight the currently selected answer
    if (button.textContent === selectedAnswer) {
      button.classList.add('selected-option');
    }
  });

  // Show next button
  nextButton.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Recalculate final score before showing results
    calculateFinalScore();
    showScoreScreen();
  }
}

function calculateFinalScore() {
  // Reset score and recalculate based on current answers
  score = 0;
  
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswer) {
      score++;
    }
  });

  scoreSound.play();
}

function getCongratulatoryMessage() {
  if (score === 20) {
    return "Edi ikaw na nakasagap ng chismis! Bumoto ka ng matalino ha, baka ikaw pa ang susunod na campaign manager! 🗳️";
  } else if (score >= 15 && score <= 19) {
    return "Konti na lang bibingo ka na! Galingan mo bumoto, hawak ko pamilya mo! 🔪 Pero seryoso, vote wisely! 💯";
  } else if (score >= 11 && score <= 14) {
    return "Chismis mo, medyo mild pa! Parang campaign promise na kulang sa detalye—dagdagan mo pa para convincing! 😉";
  } else if (score >= 6 && score <= 10) {
    return "Naku, chismis mo, parang low battery! Parang kandidato na walang plataporma—kailangan mo pang mag-research! 🔍";
  } else {
    return "Galingan mo mangalap ng chismax, kulang pa ang nasa radar mo! Parang botante na hindi pa nakapag-register! 🤗";
  }
}

function showScoreScreen() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("score-screen").style.display = "block";
  document.getElementById("answer-key-section").style.display = "none";
  
  const congratulatoryMessage = getCongratulatoryMessage();
  document.getElementById("final-score").textContent = `Your final score is: ${score} out of ${questions.length}`;
  document.getElementById("congratulatory-message").textContent = congratulatoryMessage;
}

function showAnswerKey() {
  document.getElementById("score-screen").style.display = "none";
  document.getElementById("answer-key-section").style.display = "block";
  
  const answerKeyContent = document.getElementById("answer-key-content");
  answerKeyContent.innerHTML = "";
  
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("answer-key-item");
    
    const questionNumber = document.createElement("h3");
    questionNumber.textContent = `Question ${index + 1}`;
    questionDiv.appendChild(questionNumber);
    
    const questionText = document.createElement("p");
    questionText.innerHTML = q.question.replace(/\n/g, "<br>");
    questionText.classList.add("question-text");
    questionDiv.appendChild(questionText);
    
    const correctAnswer = document.createElement("p");
    correctAnswer.innerHTML = `<strong>Correct Answer:</strong> ${q.correctAnswer}`;
    correctAnswer.classList.add("correct-answer");
    questionDiv.appendChild(correctAnswer);
    
    if (userAnswers[index]) {
      const userAnswer = document.createElement("p");
      userAnswer.innerHTML = `<strong>Your Answer:</strong> ${userAnswers[index]}`;
      userAnswer.classList.add(userAnswers[index] === q.correctAnswer ? "user-correct" : "user-wrong");
      questionDiv.appendChild(userAnswer);
    }
    
    answerKeyContent.appendChild(questionDiv);
  });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("score-screen").style.display = "none";
  document.getElementById("answer-key-section").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  displayQuestion();
}

function goToHome() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("score-screen").style.display = "none";
  document.getElementById("answer-key-section").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

function toggleDarkMode() {
  darkMode = !darkMode;
  const body = document.body;
  
  if (darkMode) {
    body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").textContent = "☀️ Light Mode";
  } else {
    body.classList.remove("dark-mode");
    document.getElementById("dark-mode-toggle").textContent = "🌙 Dark Mode";
  }
}

function backToResults() {
  document.getElementById("answer-key-section").style.display = "none";
  document.getElementById("score-screen").style.display = "block";
}

// Start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  displayQuestion();
});

// Initialize the quiz
displayQuestion();

// Shuffle questions
questions.sort(() => Math.random() - 0.5);

// Shuffle options within each question
questions.forEach(q => {
  q.options.sort(() => Math.random() - 0.5);
});

// hiding and showing navigation buttons
// script.js

window.onload = () => {
  const homeButton = document.getElementById('home-button');
  const restartButton = document.getElementById('restart-quiz-btn');
  const startButton = document.getElementById('start-button');

  function showNavigation() {
    homeButton.style.display = 'inline-block';
    restartButton.style.display = 'inline-block';
  }

  function goToHome() {
    homeButton.style.display = 'none';
    restartButton.style.display = 'none';
  }

  startButton.addEventListener('click', showNavigation);
  homeButton.addEventListener('click', goToHome);
};

