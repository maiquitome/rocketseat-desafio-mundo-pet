import dayjs from "dayjs";
import { closeModal } from "./modal";
import { newSchedule } from "../../services/new-schedule.js";
import { loadSchedules } from "../../modules/schedules/load.js";

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

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const tutorName = tutorNameInput.value.trim();
    if (!tutorName) return alert("Informe o nome do cliente!");

    const petName = petNameInput.value.trim();
    if (!petName) return alert("Informe o nome do pet!");

    const fone = foneInput.value.trim();
    if (!fone) return alert("Informe o número do telefone!");

    const serviceDescription = serviceDescriptionInput.value.trim();
    if (!serviceDescription) return alert("Informe a descrição do serviço!");

    const id = new Date().getTime();

    await newSchedule({
      id: String(id),
      tutor_name: tutorName,
      pet_name: petName,
      fone,
      service_description: serviceDescription,
      date: dateInput.value,
      time: timeInput.value,
    });

    await loadSchedules(dateInput.value);

    closeModal();
    clearInputs();
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};

function clearInputs() {
  tutorNameInput.value = "";
  petNameInput.value = "";
  foneInput.value = "";
  serviceDescriptionInput.value = "";
}
