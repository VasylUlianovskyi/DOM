"use strict";

const colorButtons = document.querySelectorAll("button[data-color]");

colorButtons.forEach((btn) => (btn.onclick = changeColor));

function changeColor() {
  this.style.backgroundColor = this.dataset.color;
}
