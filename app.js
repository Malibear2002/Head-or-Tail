/*let round = prompt("จำนวนรอบที่ต้องการจะเล่น");
let sum = 0;
for (var i = 1; i <= round; i++) {
  var answer = prompt("ทายครั้งที่" + " " + i + " : " + "หัว หรือ ก้อย?");
  var random_answer = "";
  if (Math.floor(Math.random() * 10) >= 5) {
    //หัว
    random_answer = "หัว";
  } else {
    //ก้อย
    random_answer = "ก้อย";
  }
  if (answer == random_answer) {
    alert("ถูกต้อง เก่งมากเลย");
  } else {
    alert("ทายผิด ลองใหม่นะ");
  }
  console.log(random_answer + " : " + answer);

  document.getElementById("game-list").innerHTML +=
    "<br>" +
    " " +
    "ทายครั้งที่" +
    " " +
    i +
    " : " +
    answer +
    " " +
    "//" +
    " " +
    "ผลที่ออก" +
    " : " +
    random_answer +
    " " +
    "<br>" +
    "<br>";

  if (answer == random_answer) {
    answer = 1;
  } else {
    answer = 0;
  }
  console.log(answer);

  sum = sum + parseInt(answer);
  document.getElementById("game_score").innerHTML =
    "<strong>" + "คะแนนรวม" + " " + sum + " " + "คะแนน";
}

//document.getElementById("game-list").innerHTML =
answer + " " + random_answer + "<br>"; */

function myFunction() {
  var guess = document.getElementById("guess").value;
  buttonOK = "true";

  let result;

  if (guess != "Head" && guess != "Tail") {
    alert("Please Choose one answer : Head or Tail 👻🤍");
    i--;
  } else {
    const toss = Boolean(Math.round(Math.random()));
    const coin = toss ? "Head" : "Tail";

    console.log(guess + " " + ":" + " " + coin);

    result =
      guess == coin
        ? (point = "Yayy, So Lucky ฅ՞oﻌo՞ฅ 🤍!")
        : (point = "Maybe, Try Again ฅ՞>ﻌ<՞ฅ 🖤!");

    console.log(result);
    document.getElementById("score").innerHTML = result;
  }
}

/* let round = prompt("How many round you want to play ? :");
let point = 0;
let result;
let sum = 0;
for (var i = 1; i <= round; i++) {
  let guess = prompt(
    "Guess no." + " " + i + " " + "Head" + " " + "or" + " " + "Tail" + " " + "?"
  );

  if (guess.toLowerCase() != "head" && guess.toLowerCase() != "tail") {
    alert("Please enter just Head or Tail !");
    i--;
  } else {
    const toss = Boolean(Math.round(Math.random()));
    const coin = toss ? "Head" : "Tail";

    console.log(guess + " " + ":" + " " + coin);

    result = guess == coin.toLowerCase() ? (point += 1) : (point += 0);
    console.log(result);
  }*/

//let score;

/* for (var i = 0; i < round; i++) {
  const toss = Boolean(Math.round(Math.random()));
  const coin = toss ? "Head" : "Tail";

  console.log(coin);

  score = coin == "Head" ? (point += 1) : (point += 0);
}
console.log(score); */
