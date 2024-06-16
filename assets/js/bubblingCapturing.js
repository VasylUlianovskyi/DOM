"use strict";

const innerDivEl = document.querySelector(".innerDiv");
const outerDivEl = document.querySelector(".outerDiv");

innerDivEl.addEventListener("click", handler, { capture: true });
outerDivEl.addEventListener("click", handler, { capture: true });
document.body.addEventListener("click", handler, { capture: true });

function handler(e) {
  console.log("this :>> ", this);
  // console.log("e.target :>> ", e.target);
  // console.log("e.currentTarget :>> ", e.currentTarget);
}

document.body.addEventListener("click", clickHandler, { capture: true });

let clickCounter = 0;

function clickHandler(e) {
  clickCounter++;
  console.log(clickCounter);
  e.stopPropagation();
}
