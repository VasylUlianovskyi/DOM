"use strict";

const heartBtn = document.querySelector("button");

heartBtn.addEventListener("click", heartClickHandler);

function heartClickHandler(e) {
  this.classList.toggle("redHeart");
  e.stopPropagation();
}

const articleEL = document.querySelector("article");

articleEL.addEventListener("click", cangeArtColor);

function cangeArtColor() {
  this.classList.toggle("newArtColor");
}
