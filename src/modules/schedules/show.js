import { deleteSchedule } from "../../services/delete-schedule";

const periodMorningSchedules = document.querySelector(
  ".period.morning > .schedules"
);
const periodAfternoonSchedules = document.querySelector(
  ".period.afternoon > .schedules"
);
const periodNightSchedules = document.querySelector(
  ".period.evening > .schedules"
);

function clearPeriods() {
  periodMorningSchedules.innerHTML = "";
  periodAfternoonSchedules.innerHTML = "";
  periodNightSchedules.innerHTML = "";
}

export function showSchedules(schedules) {
  clearPeriods();

  console.log(schedules);

  schedules.forEach((schedule) => buildSchedule(schedule));
}

function buildSchedule(schedule) {
  // <div class="schedule">
  //   <span>
  //     <span class="time">20:00</span>
  //     <span class="names">
  //       <span class="pet-name">Max</span>
  //       <span class="person-name"> / Camila Santos</span>
  //     </span>
  //     <span class="procedure">Limpeza de Dentes</span>
  //   </span>
  //   <span class="remove-schedule">Remover agendamento</span>
  // </div>

  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const span = document.createElement("span");

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = schedule.time;
  span.append(timeSpan);

  const namesSpan = document.createElement("span");
  namesSpan.classList.add("names");

  const tutorNameSpan = document.createElement("span");
  tutorNameSpan.classList.add("person-name");
  tutorNameSpan.textContent = ` / ${schedule.tutor_name}`;

  const petNameSpan = document.createElement("span");
  petNameSpan.classList.add("pet-name");
  petNameSpan.textContent = schedule.pet_name;

  const serviceDescriptionSpan = document.createElement("span");
  serviceDescriptionSpan.classList.add("procedure");
  serviceDescriptionSpan.textContent = schedule.service_description;

  const removeScheduleSpan = document.createElement("span");
  removeScheduleSpan.classList.add("remove-schedule");
  removeScheduleSpan.textContent = "Remover agendamento";

  removeScheduleSpan.onclick = () => {
    const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");
    if (isConfirm) {
      deleteSchedule(schedule.id);
      removeScheduleSpan.closest("div.schedule").outerHTML = "";
    }
  };

  namesSpan.append(tutorNameSpan);
  namesSpan.prepend(petNameSpan);
  span.append(namesSpan);
  span.append(serviceDescriptionSpan);
  scheduleDiv.append(span);
  scheduleDiv.append(removeScheduleSpan);

  const time = String(schedule.time.replace(":", ""));

  if (time < 1200) {
    periodMorningSchedules.append(scheduleDiv);
  } else if (time < 1800) {
    periodAfternoonSchedules.append(scheduleDiv);
  } else {
    periodNightSchedules.append(scheduleDiv);
  }
}
