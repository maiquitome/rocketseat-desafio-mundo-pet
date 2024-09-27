import { getSchedules } from "../../services/get-schedules";
import { showSchedules } from "../../modules/schedules/show";

const dateInput = document.getElementById("date-filter-input");

export async function loadSchedules(date) {
  dateInput.value = date;
  const filteredSchedules = await getSchedules(date);
  showSchedules(filteredSchedules);
}
