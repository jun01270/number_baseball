let $firstNum = document.querySelector("#firstNum");
let $secondNum = document.querySelector("#secondNum");
let $end = document.querySelector("#end");
let $submit = document.querySelector("#submit");
let $write = document.querySelector("#write");
$firstNum.textContent = Math.floor(Math.random() * 10);
$secondNum.textContent = Math.floor(Math.random() * 10);

const multiFly = (e) => {
  if (
    parseInt($write.value) ===
    parseInt($firstNum.textContent) * parseInt($secondNum.textContent)
  ) {
    e.preventDefault();
    $end.textContent = "정답입니다!";
    $firstNum.textContent = Math.floor(Math.random() * 10);
    $secondNum.textContent = Math.floor(Math.random() * 10);
    $write.value = "";
  } else {
    e.preventDefault();
    $end.textContent = "오답입니다 다시 해보세요!!";
  }
};

$submit.addEventListener("submit", multiFly);
