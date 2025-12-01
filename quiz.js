const quiz = [
  {
    question: "Which organ uses the most energy in the human body?",
    options: ["Heart", "Liver", "Brain", "Kidneys"],
    answer: 2
  },
  {
    question: "How do butterflies taste food?",
    options: ["With their antennae", "With their feet", "With their wings", "With their eyes"],
    answer: 1
  },
  {
    question: "How many bones does a baby have?",
    options: ["206", "300", "180", "250"],
    answer: 1
  }
];

let current = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  const options = document.getElementById("options");
  options.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.innerText = opt;
    li.onclick = () => checkAnswer(i);
    options.appendChild(li);
  });
}

function checkAnswer(i) {
  const feedback = document.getElementById("feedback");
  if (i === quiz[current].answer) {
    feedback.innerText = "✅ Correct!";
  } else {
    feedback.innerText = "❌ Try again!";
  }
  current = (current + 1) % quiz.length;
  setTimeout(() => {
    feedback.innerText = "";
    loadQuestion();
  }, 2000);
}

loadQuestion();
