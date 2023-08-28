let $baseball = document.querySelector("#baseball");
let $baseball_strike = document.querySelector("#baseball_strike");
let $baseball_ball = document.querySelector("#baseball_ball");
let $baseball_out = document.querySelector("#baseball_out");
let value = document.querySelector("#baseball_input");

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
  const answer_string = answer.join("");

  all.push(value);
  record.innerHTML = `${all}`;
  console.log(answer.join(""));
  console.log(value);
  if (answer_string === value) {
    $baseball_strike.textContent = "S ";
    $baseball_ball.textContent = "S ";
    $baseball_out.textContent = "S";
    alert("홈런!!");
  } else if (answer_string[0] === value) {
  }
};

const baseball = (e) => {
  const value_array = Array.from(value);
  let count = 0;
  e.preventDefault();
  count++;
  if (count < 10) {
    if (value_array.length >= 4) {
      alert("글자가 넘 많아요");
    } else if (new Set(value_array).size < 3) {
      console.log(value_array);
      console.log(value);
      alert("중복은 안돼요");
    } else {
      sbo();
    }
  } else {
    alert("실패!");
  }
};

$baseball.addEventListener("submit", baseball);
