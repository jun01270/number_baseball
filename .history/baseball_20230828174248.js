let $baseball = document.querySelector("#baseball");
let $baseball_input = document.querySelector("#baseball_input");
let $baseball_strike = document.querySelector("#baseball_strike");
const $record = document.querySelector("#record");
let all = [];
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
  let strike = 0;
  let ball = 0;
  let out = 0;

  const array = Array.from($baseball_input.value);
  const value = array.map((x) => Number(x));
  all.push($baseball_input.value);
  record.innerHTML = `${all}`;
  console.log("정답은: ", answer.join(""));
  console.log("입력한 값은: ", value.join(""));
  if (answer.join("") === value.join("")) {
    alert("홈런!");
    $baseball_strike.textContent(`S S S`);
  }
  for (let i = 0; i < answer.length; i++) {
    const index = answer.indexOf(value[i]);
    console.log(index);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (strike === 1) {
    $baseball_strike.append(
      document.createElement("br"),
      `${strike}스트라이크 ${ball}볼 ${out}아웃`
    );
  }
  out = answer.length - (strike + ball);
  $baseball_strike.append(
    document.createElement("br"),
    `${strike}스트라이크 ${ball}볼 ${out}아웃`
  );
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
