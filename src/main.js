"use strict";

// CSS
import "./styles/global.css";
import "./styles/form/index.css";
import "./styles/main.css";
import "./styles/section.css";

const newScheduleButtons = document.querySelectorAll(".new-schedule");
const modal = document.getElementById("modal");
const container = document.querySelector(".container");
const newScheduleButtonContainer = document.querySelector(
  "#new-schedule-container"
);

newScheduleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    modal.classList.remove("hiding");
    container.classList.add("blur");
    hideButton(button);
  })
);

const closeModal = document.querySelector("#close-modal");
closeModal.onclick = function () {
  modal.classList.add("hiding");
  container.classList.remove("blur");
  showButtons();
};

function hideButton(button) {
  button.classList.add("hiding");
  newScheduleButtonContainer.classList.add("hiding");
}

function showButtons() {
  newScheduleButtons.forEach((button) => {
    button.classList.remove("hiding");
    newScheduleButtonContainer.classList.remove("hiding");
  });
}
