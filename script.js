let current = 0;
let score = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(questions);

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question-img").src = q.img;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").innerText = "";
}

document.getElementById("submit-btn").addEventListener("click", () => {
  const input = document.getElementById("answer-input").value.trim();
  if(input.toLowerCase() === questions[current].answer.toLowerCase()){
    document.getElementById("feedback").innerText = "✅ 正确！";
    score++;
  } else {
    document.getElementById("feedback").innerText = `❌ 错误，正确答案：${questions[current].answer}`;
  }
  current++;
  if(current < questions.length){
    setTimeout(loadQuestion, 1000);
  } else {
    document.getElementById("score").innerText = `最终得分：${score} / ${questions.length}`;
    document.getElementById("question-img").style.display = "none";
    document.getElementById("answer-input").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
  }
});

loadQuestion();
