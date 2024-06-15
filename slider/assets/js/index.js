const slides = [
  {
    src: "hps://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    alt: "landscape4",
  },
];
const sliderImg = document.querySelector(".slider-img");
const [prevBtn, nextBtn] = document.querySelectorAll("button");
function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}

function sliderError() {
  sliderImg.src =
    "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg";
  sliderImg.alt = "unavaible img";
}

sliderImg.onerror = () => {
  sliderError();
};

try {
  const slider = new Slider(slides, 0);
  updateSlider(slider.currentIndex);

  prevBtn.onclick = () => {
    slider.decIndex();
    updateSlider(slider.currentIndex);
  };

  nextBtn.onclick = () => {
    slider.incIndex();
    updateSlider(slider.currentIndex);
  };
} catch (err) {
  sliderImg.src = sliderError();
}

console.log("affter error");
