import dayjs from "dayjs";
import { closeModal } from "./modal";

const form = document.querySelector("form");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const tutorNameInput = document.getElementById("tutor-name");
const petNameInput = document.getElementById("pet-name");
const foneInput = document.getElementById("fone");
const serviceDescriptionInput = document.getElementById("service-description");

const now = dayjs(new Date());

const today = now.format("YYYY-MM-DD");
const time = now.format("HH:mm");

dateInput.value = today;
dateInput.min = today;

timeInput.value = time;

form.onsubmit = (event) => {
  event.preventDefault();

  console.log({
    tutorName: tutorNameInput.value,
    petName: petNameInput.value,
    fone: foneInput.value,
    serviceDescription: serviceDescriptionInput.value,
    date: dateInput.value,
    time: timeInput.value,
  });

  closeModal();

  clearInputs();
};

function clearInputs() {
  tutorNameInput.value = "";
  petNameInput.value = "";
  foneInput.value = "";
  serviceDescriptionInput.value = "";
}
