import dayjs from "dayjs";
import { loadSchedules } from "../modules/schedules/load";

document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM ESTÁ PRONTO");

  const now = dayjs(new Date());
  const today = now.format("YYYY-MM-DD");

  loadSchedules(today);

  const dateInput = document.getElementById("date-filter-input");
  dateInput.onchange = () => loadSchedules(dateInput.value);
});
