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
  let naipe = ["diamond", "spade", "heart", "cub"];
  let indxNaipe = Math.floor(Math.random() * naipe.length);
  return naipe[indxNaipe];
};

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
