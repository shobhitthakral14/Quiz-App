document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
  
    
    // adding the questions to the array 
    const questions = [
      {
        question: "What is a bit in computer science?",
        choices: [" A unit of data equivalent to 8 bytes", "A unit of data equivalent to 1 or 0","A unit of memory","A type of hardware"],
        answer: "A unit of data equivalent to 1 or 0",
      },
      {
        question: "Which of these is an example of an open-source operating system?",
        choices: ["Windows", "macOS","Linux","Solaris"],
        answer: "Linux",
      },
      {
        question: "What is the primary function of a compiler?",
        choices: [
          "To execute code",
          "To translate high-level code into machine language",
          "To debug errors",
          "To store data",
        ],
        answer: "To translate high-level code into machine language",
      },
      {
        question: "What is the binary representation of the decimal number 5?",
        choices: [
          "100",
          "110",
          "101",
          "111",
        ],
        answer: "101",
      },
      {
        question: "What does HTTP stand for?",
        choices: [
          "Hyperlink Transfer Protocol",
          "Hypertext Transfer Protocol",
          "High Transfer Text Protocol",
          "Hypertext Transmission Program",
        ],
        answer: "Hypertext Transfer Protocol",
      },
      {
        question: "Which of these is used to store data permanently?",
        choices: [
          "RAM",
          "ROM",
          "Hard Disk",
          "Cache",
        ],
        answer: "Hard Disk",
      },
      {
        question: "What is an algorithm?",
        choices: [
          "A type of a software",
          "A step-by-step set of instructions to solve a problem",
          "A programming language",
          "A hardware component",
        ],
        answer: "A step-by-step set of instructions to solve a problem",
      },
      {
        question: "Which of the following is NOT a programming language?",
        choices: [
          "Python",
          "Java",
          "HTML",
          "SQL",
        ],
        answer: "HTML",
      },
      {
        question: "What does CPU stand for?",
        choices: [
          "Central Processing Unit",
          "Core Processing Unit",
          "Computer Processing Unit",
          "Circuit Processing Unit",
        ],
        answer: "Central Processing Unit",
      },
      {
        question: "What is the primary function of an operating system?",
        choices: [
          "To compile code",
          "To manage computer hardware and software resources",
          "To create websites",
          " To design user interfaces",
        ],
        answer: "To manage computer hardware and software resources",
      },
      
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    // starting the quiz by clicking the button 
    startBtn.addEventListener("click", startQuiz);
  
    // what happen when next button is clicked
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      // if array is not completed then return the next question else return the result 
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
  
    // restart button makes everything 0 and start the quiz again
    restartBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resultContainer.classList.add("hidden");
      startQuiz();
    });
  
  
    // start quiz function 
    function startQuiz() {
  
      //make the start button and result container hidden and question container remove hidden
      startBtn.classList.add("hidden");
      resultContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      showQuestion();
    }
  
    // show question function 
    function showQuestion() {
      // next question button is hidden until the previous question is anwered
      nextBtn.classList.add("hidden");
      questionText.textContent = questions[currentQuestionIndex].question;
      choicesList.innerHTML = ""; //clear previous choices
      questions[currentQuestionIndex].choices.forEach((choice) => {
        // create a list item ans then add it to choice list as append child 
        const li = document.createElement("li");
        li.textContent = choice;
      // making the option selectable
        li.addEventListener("click", () => selectAnswer(choice));
        //adding it in choiceslist 
        choicesList.appendChild(li);
      });
    }
  
    function selectAnswer(choice) {
      // making a variable correcct and check that the choice is correct or not 
      const correctAnswer = questions[currentQuestionIndex].answer;
      if (choice === correctAnswer) {
        score++;
      }
      // removing the next button from hidden 
      nextBtn.classList.remove("hidden");
    }
  
    // displaying the reult 
    function showResult() {
      // hiding the question and removing the result container 
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      // display the result that is achieved
      scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
  });