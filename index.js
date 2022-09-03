"use strict";

let forth = document.querySelector(".forth");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let text = 60;
let text1 = 13;
let text2 = 23;
let text3 = 59;

let time = setInterval(() => {
  first.textContent = text1;
  second.textContent = text2;

  if (text2 == 0 && text3 == 0 && text == 0) {
    first.textContent = text1;
  }

  text--;
  if (text == 0 && text1 == 0 && text2 == 0 && text3 == 0) {
    clearInterval(time);
  }
  third.textContent = text3;

  forth.textContent = text;

  if (text2 == 0 && text3 == 0 && text == 0) {
    text1--;
    text2 = 24;
  }

  if (text3 == 0 && text == "0") {
    text2--;
    text3 = 60;
  }

  if (text == 0) {
    text3--;
    text = 60;
  }
}, 1000);
