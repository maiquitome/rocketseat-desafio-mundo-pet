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

const closeModalIcon = document.querySelector("#close-modal");

closeModalIcon.onclick = closeModal;

export function closeModal() {
  modal.classList.add("hiding");
  container.classList.remove("blur");
  showButtons();
}

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
