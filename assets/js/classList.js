"use strict";

const task1El = document.querySelector("#task1");

task1El.addEventListener("click", doneTaskHandler);

function doneTaskHandler(e) {
  this.classList.toggle("doneTask");
  this.classList.replace("redTask", "greenTask");
}

const title = document.querySelector("#title");

title.addEventListener("click", chandeBorder);

function chandeBorder(e) {
  this.classList.toggle("newBorder");
}
