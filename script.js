document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    { q: "What is phishing?", o: ["Fishing for real fish", "A cyberattack to steal info", "Fixing a computer virus"], a: 1 },
    { q: "What is a strong password?", o: ["123456", "Your pet's name", "A mix of letters, numbers, and symbols"], a: 2 },
    { q: "What should you do if you receive a suspicious email?", o: ["Open it", "Click links", "Delete or report it"], a: 2 },
    { q: "What is 2FA?", o: ["Two Facebook Accounts", "Two-Factor Authentication", "Two Friends Access"], a: 1 },
    { q: "What is malware?", o: ["A type of food", "Malfunctioning software", "Malicious software"], a: 2 }
  ];

  const container = document.getElementById("quiz-container");

  function loadQuestions() {
    container.innerHTML = quizData.map((q, index) => {
      return `
        <div class="question-float">
          <p>${q.q}</p>
          <div class="answers" data-index="${index}">
            ${q.o.map((opt, i) => `<button data-i="${i}">${opt}</button>`).join("")}
          </div>
          <div class="feedback" id="feedback-${index}"></div>
        </div>
      `;
    }).join("");

    document.querySelectorAll(".answers").forEach((answerBlock) => {
      const questionIndex = +answerBlock.getAttribute("data-index");
      answerBlock.querySelectorAll("button").forEach((btn) => {
        btn.onclick = () => {
          const selected = +btn.dataset.i;
          const feedback = document.getElementById(`feedback-${questionIndex}`);
          if (selected === quizData[questionIndex].a) {
            feedback.textContent = "✅ Correct!";
            feedback.style.color = "green";
          } else {
            feedback.textContent = "❌ Incorrect. Try again.";
            feedback.style.color = "red";
          }
        };
      });
    });
  }

  loadQuestions();
});
