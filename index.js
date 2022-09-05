"use strict";

let forth = document.querySelector(".forth");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let text = 60;
let text1 = 13;
let text2 = 23;
let text3 = 59;
let year = 2023;
let countDownDate = new Date(`Jan 1, ${year} 00:00:00 `).getTime();

let today = new Date().getTime();

let distance = countDownDate - today;
let countdays = Math.floor(distance / (1000 * 60 * 60 * 24));

let counthours = Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
let countminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let countseconds = Math.floor((distance % (1000 * 60)) / 1000);
first.textContent = countdays;
second.textContent = counthours;
third.textContent = countminutes;
forth.textContent = countseconds;
let count = setInterval(function () {
   countDownDate = new Date(`Jan 1, ${year} 00:00:00 `).getTime();

   today = new Date().getTime();

   distance = countDownDate - today;
   countdays = Math.floor(distance / (1000 * 60 * 60 * 24));

   counthours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
   countminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  countseconds = Math.floor((distance % (1000 * 60)) / 1000);

  

  first.textContent = countdays;
  second.textContent = counthours;
  third.textContent = countminutes;
  forth.textContent = countseconds;
  if (
    first.textContent == 0 &&
    second.textContent == 0 &&
    third.textContent == 0 &&
    forth.textContent == 0
  ) {
    year++;
  }
}, 1000);
