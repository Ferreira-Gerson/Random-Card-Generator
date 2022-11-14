/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let generateRandomNumber = () => {
  let cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indxCards = Math.floor(Math.random() * cards.length);
  return cards[indxCards];
};

let generateRandomSuit = () => {
  let naipe = ["♦", "♠", "♥", "♣"];
  let indxNaipe = Math.floor(Math.random() * naipe.length);
  console.log(naipe[indxNaipe]);
  if (naipe[indxNaipe] === "♦" || naipe[indxNaipe] === "♥") {
    document.querySelector(".top-suit").setAttribute("id", "colorRed");
    document.querySelector(".botton-suit").setAttribute("id", "colorRed");
  }
  return naipe[indxNaipe];
};

window.onload = () => {
  //write your code here
  // document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number-suit").innerHTML = generateRandomNumber();
  // document.querySelector(
  //   ".top-suit",
  //   ".botton-suit"
  // ).innerHTML = generateRandomSuit();

  const randonsuit = generateRandomSuit();
  document.querySelector(".top-suit").innerHTML = randonsuit;
  document.querySelector(".botton-suit").innerHTML = randonsuit;
};

// window.setInterval(generateRandomSuit, 10000);
