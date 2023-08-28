let $baseball = document.querySelector("#baseball");
let $baseball_input = document.querySelector("#baseball_input");
let $baseball_strike = document.querySelector("#baseball_strike");
let $baseball_ball = document.querySelector("#baseball_ball");
let $baseball_out = document.querySelector("#baseball_out");
let value = $baseball_input.value

const $record = document.querySelector("#record");
let randomNumber = [];
for (let n = 0; n <= 9; n += 1) {
  randomNumber.push(n);
}

const answer = [];
for (let i = 0; i < 3; i++) {
  const index = Math.floor(Math.random() * randomNumber.length);
  answer.push(randomNumber[index]);
  randomNumber.splice(index, 1);
}

const sbo = () => {
  let all = [];
  const answer_string = answer.join("")

  all.push($baseball_input.value);
  record.innerHTML = `${all}`;
  console.log(answer.join(""));
  console.log($baseball_input.value);
  if (answer_string === $baseball_input.value) {
    $baseball_strike.textContent = "S ";
    $baseball_ball.textContent = "S ";
    $baseball_out.textContent = "S";
    alert("홈런!!");
  } else if(answer_string[0] === $baseball_input.value)
};

const baseball = (e) => {
  const value = Array.from($baseball_input.value);
  let count = 0;
  e.preventDefault();
  count++;
  if (count < 10) {
    if ($baseball_input.value.length >= 4) {
      alert("글자가 넘 많아요");
    } else if (new Set(value).size < 3) {
      alert("중복은 안돼요");
    } else {
      sbo();
    }
  } else {
    alert("실패!");
  }
};

$baseball.addEventListener("submit", baseball);
