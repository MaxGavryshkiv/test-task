const PopUp = document.querySelector("[data-popup]");
const PopUpOpenButton = document.querySelector(".PopUp_open-bttn");
const PopUpCloseButton = document.querySelector(".PopUp_close-bttn");
const PopUpCancelButton = document.querySelector(".PopUp_nav-bttn-cancel");
const PopUpUninstallButton = document.querySelector(
  ".PopUp_nav-bttn-uninstall"
);

PopUp.addEventListener("click", onBackDropClick);
PopUpOpenButton.addEventListener("click", togglePopUp);
PopUpCloseButton.addEventListener("click", togglePopUp);
PopUpCancelButton.addEventListener("click", togglePopUp);
PopUpUninstallButton.addEventListener("click", popUpUninstall);

function togglePopUp() {
  PopUp.classList.toggle("PopUp_is-hidden");
}

function popUpUninstall() {
  togglePopUp();
  alert("DONE");
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    togglePopUp();
  }
}
