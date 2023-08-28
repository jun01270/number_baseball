let $baseball = document.querySelector("#baseball");
let $baseball_input = document.querySelector("#baseball_input");
let $baseball_strike = document.querySelector("#baseball_strike");
const $new_baseball = document.querySelector("#new_baseball");
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
    $baseball_strike.append(document.createElement("br"), `S S S`);
  }
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    console.log(index);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  out = answer.length - (strike + ball);
  if (strike === 1 && ball === 1 && out === 1) {
    $baseball_strike.append(document.createElement("br"), `S B O`);
  } else if (strike === 2 && ball === 1) {
    $baseball_strike.append(document.createElement("br"), `S S B`);
  } else if (strike === 1 && ball === 2) {
    $baseball_strike.append(document.createElement("br"), `S B B`);
  } else if (strike === 1 && ball === 0 && out === 2) {
    $baseball_strike.append(document.createElement("br"), `S O O`);
  } else if (strike === 2 && ball === 0 && out === 1) {
    $baseball_strike.append(document.createElement("br"), `S S O`);
  } else if (strike === 0 && ball === 1 && out === 2) {
    $baseball_strike.append(document.createElement("br"), `B O O`);
  } else if (strike === 0 && ball === 2 && out === 1) {
    $baseball_strike.append(document.createElement("br"), `B B O`);
  } else if (strike === 0 && ball === 3 && out === 0) {
    $baseball_strike.append(document.createElement("br"), `B B B`);
  } else if (strike === 0 && ball === 0 && out === 3) {
    $baseball_strike.append(document.createElement("br"), `O O O`);
  }
};

const baseball = (e) => {
  const value = Array.from($baseball_input.value);
  let count = 0;
  e.preventDefault();
  count++;
  if (count < 10) {
    if ($baseball_input.value.length >= 4) {
      alert("글자가 넘 많아요!");
    } else if ($baseball_input.value == "") {
      alert("빈 칸은 안돼요!");
    } else if (new Set(value).size < 3) {
      alert("중복은 안돼요!");
    } else {
      sbo();
    }
  } else {
    alert("실패!");
  }
};

$baseball.addEventListener("submit", baseball);
$new_baseball.addEventListener("click");
