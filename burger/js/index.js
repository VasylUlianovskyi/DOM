const menuContainer = document.querySelector(".burgerMenuContainer");
const body = document.querySelector(".fullScreenOverlay");

menuContainer.addEventListener("click", changeBurgerVisibility);

body.addEventListener("click", changeBurgerVisibility);

function changeBurgerVisibility() {
  menuContainer.classList.toggle("burgerMenuContainerActive");
  menuContainer.classList.toggle("burgerMenuContainerHide");
}
