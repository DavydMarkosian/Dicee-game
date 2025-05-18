function randomPick() {
  let random = Math.floor(Math.random() * 6) + 1;
  return random;
}

let dicee1 = [5];
let dicee2 = [3, 7];
let dicee3 = [3, 5, 7];
let dicee4 = [1, 3, 7, 9];
let dicee5 = [1, 3, 5, 7, 9];
let dicee6 = [1, 3, 4, 6, 7, 9];
let arrayOfDicees1 = [dicee1, dicee2, dicee3, dicee4, dicee5, dicee6];
let arrayOfDicees2 = arrayOfDicees1;

let block1 = document.getElementsByClassName("dot1")[0];
let block2 = document.getElementsByClassName("dot2")[0];
let block3 = document.getElementsByClassName("dot3")[0];
let block4 = document.getElementsByClassName("dot4")[0];
let block5 = document.getElementsByClassName("dot5")[0];
let block6 = document.getElementsByClassName("dot6")[0];
let block7 = document.getElementsByClassName("dot7")[0];
let block8 = document.getElementsByClassName("dot8")[0];
let block9 = document.getElementsByClassName("dot9")[0];

let block10 = document.getElementsByClassName("dot10")[0];
let block11 = document.getElementsByClassName("dot11")[0];
let block12 = document.getElementsByClassName("dot12")[0];
let block13 = document.getElementsByClassName("dot13")[0];
let block14 = document.getElementsByClassName("dot14")[0];
let block15 = document.getElementsByClassName("dot15")[0];
let block16 = document.getElementsByClassName("dot16")[0];
let block17 = document.getElementsByClassName("dot17")[0];
let block18 = document.getElementsByClassName("dot18")[0];

let arrayOfBlocks1 = [
  block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
  block9,
];
let arrayOfBlocks2 = [
  block10,
  block11,
  block12,
  block13,
  block14,
  block15,
  block16,
  block17,
  block18,
];

let h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = `Dicee Game`;

let btn = document.getElementsByClassName("btn")[0];

let inputs = document.getElementsByTagName("input");
let namesOfPlayers = document.getElementsByTagName("p");

btn.onclick = function (e) {
  let randomNumber1 = randomPick();
  let randomNumber2 = randomPick();

  let img = document.getElementsByTagName("img");
  img[0].classList.remove("vision");
  img[1].classList.remove("vision");

  if (randomNumber1 > randomNumber2) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = `Player 1 Wins!`;
    img[0].classList.add("vision");
  }

  if (randomNumber1 < randomNumber2) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = `Player 2 Wins!`;
    img[1].classList.add("vision");
  }

  if (randomNumber1 === randomNumber2) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = `Tie!`;
    img[0].classList.add("vision");
    img[1].classList.add("vision");
  }

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i].value;
    namesOfPlayers[i].innerText = input;
    inputs[i].classList.add("inputVision");
  }

  for (const block of arrayOfBlocks1) {
    block.classList.remove("dot");
  }

  for (const block of arrayOfBlocks2) {
    block.classList.remove("dot");
  }

  for (let i = 0; i < arrayOfDicees1.length; i++) {
    if (randomNumber1 == i + 1) {
      let pickedDicee = arrayOfDicees1[i];

      for (const element of pickedDicee) {
        for (const block of arrayOfBlocks1) {
          if (element == block.id) {
            block.classList.add("dot");
          }
        }
      }
    }
  }

  for (let i = 0; i < arrayOfDicees2.length; i++) {
    if (randomNumber2 == i + 1) {
      let pickedDicee = arrayOfDicees2[i];

      for (const element of pickedDicee) {
        for (const block of arrayOfBlocks2) {
          if (element == Number(block.id - 9)) {
            block.classList.add("dot");
          }
        }
      }
    }
  }

  btn.innerText = "Reload";
};
