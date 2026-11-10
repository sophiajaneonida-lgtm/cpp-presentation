// Database of 10 Technical Questions with specific index indicators
const quizData = [
  {
    question: "1. What does a pointer variable store inside memory?",
    options: ["The real value directly", "The raw memory address of another asset", "A compiled string layout", "A reference counter definition"],
    correct: 1 // B
  },
  {
    question: "2. Which Operator symbol is executed to access the address of a regular variable?",
    options: ["*", "&", "->", "sizeof"],
    correct: 1 // B
  },
  {
    question: "3. What happens when you declare a reference variable without initializing it instantly?",
    options: ["It defaults to a clean address", "It remains dangling", "It triggers a direct Compilation Error", "It takes on a null value automatically"],
    correct: 2 // C
  },
  {
    question: "4. Which of the following is completely valid C++ syntax?",
    options: ["int& ref = nullptr;", "int* ptr = nullptr;", "void* &ref = clean;", "int* ref = &void Dino;"],
    correct: 1 // B
  },
  {
    question: "5. Can a Reference handle look at a completely different variable target later in execution?",
    options: ["Yes, anytime", "No, it is immutable once bound to a target", "Only if it is declared volatile", "Only if using the -> modifier"],
    correct: 1 // B
  },
  {
    question: "6. What action does traveling to an address to obtain the values inside a pointer refer to?",
    options: ["Referencing", "Deallocating", "Dereferencing", "Binding"],
    correct: 2 // C
  },
  {
    question: "7. Which parameter pass-by strategy should be selected to avoid large data duplication copy overhead without passing raw addresses manually?",
    options: ["Pass-by-value", "Pass-by-pointer", "Pass-by-reference", "Pass-by-copy"],
    correct: 2 // C
  },
  {
    question: "8. What is the structural performance syntax of 'ptr++' on arrays?",
    options: ["Increments the values inside target element", "Moves the pointer step forward to the next index block", "Triggers a null safety termination crash", "Multiplies execution time"],
    correct: 1 // B
  },
  {
    question: "9. Which statement is true about references?",
    options: ["They consume explicit word sizes", "They act purely as clean alternative aliases to existing targets", "They can link to array bounds outside variables", "They can be modified using math indexes"],
    correct: 1 // B
  },
  {
    question: "10. What utility structure prevents unintended edits when passing parameters by reference?",
    options: ["static validation", "const reference modifier", "private access flags", "inline definitions"],
    correct: 1 // B
  }
];

const optionPrefixes = ["A", "B", "C", "D"];
let masterAnswersRevealed = false;

function buildQuizSheet() {
  const root = document.getElementById("questions-root");
  if (!root) return;

  root.innerHTML = "";

  quizData.forEach((item, qIdx) => {
    // Container Frame
    const qBox = document.createElement("div");
    qBox.className = "question-item";
    qBox.id = `q-item-${qIdx}`;

    // Title Title String
    const qTitle = document.createElement("div");
    qTitle.className = "question-title";
    qTitle.innerText = item.question;
    qBox.appendChild(qTitle);

    // Grid Container for Choices
    const optionsGrid = document.createElement("div");
    optionsGrid.className = "options-list";

    item.options.forEach((opt, oIdx) => {
      const row = document.createElement("div");
      row.className = "option-row";
      if (oIdx === item.correct) {
        row.className += " correct-choice";
      }

      row.innerHTML = `<span class="option-prefix">${optionPrefixes[oIdx]}.</span> ${opt}`;
      optionsGrid.appendChild(row);
    });
    qBox.appendChild(optionsGrid);

    // Hidden Answer Segment Area
    const answerPanel = document.createElement("div");
    answerPanel.className = "answer-panel";
    answerPanel.id = `answer-panel-${qIdx}`;
    answerPanel.innerHTML = `<span class="answer-badge">Correct Answer Key: [${optionPrefixes[item.correct]}] — ${item.options[item.correct]}</span>`;
    
    qBox.appendChild(answerPanel);
    root.appendChild(qBox);
  });
}

function toggleAllAnswers() {
  const masterBtn = document.querySelector(".reveal-master-btn");
  masterAnswersRevealed = !masterAnswersRevealed;

  quizData.forEach((_, idx) => {
    const panel = document.getElementById(`answer-panel-${idx}`);
    const box = document.getElementById(`q-item-${idx}`);
    
    if (masterAnswersRevealed) {
      panel.classList.add("show");
      box.classList.add("reveal-highlight");
    } else {
      panel.classList.remove("show");
      box.classList.remove("reveal-highlight");
    }
  });

  masterBtn.innerText = masterAnswersRevealed ? "Hide Answer Keys" : "Reveal All Answer Keys";
}

// Initial structural rendering loop when site layout finishes building
document.addEventListener("DOMContentLoaded", buildQuizSheet);
