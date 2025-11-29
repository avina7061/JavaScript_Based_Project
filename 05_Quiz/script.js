document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let index = 0;
  let score = 0;

  startBtn.addEventListener("click", renderTask);

  // Corrected renderTask function
  function renderTask() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    questionText.innerHTML = questions[index].question;
    
    // Clear previous choices
    choicesList.innerHTML = '';

    questions[index].choices.forEach((choice) => {
      const li = document.createElement("li");  // Corrected here
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    if (choice === questions[index].answer) {  // Check if the selected answer is correct
      score += 1;
      console.log(score);
    }
  
    // Move to the next question
    index++;
  
    // Check if we've finished all the questions
    if (index === questions.length) {
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      scoreDisplay.textContent = `Your score is: ${score} / ${questions.length}`;
    } else {
      renderTask(); // Render next question if there are more
    }
  }
  restartBtn.addEventListener("click",()=>{
    score=0;index=0;
    renderTask();
    resultContainer.classList.add("hidden")
  })
});
