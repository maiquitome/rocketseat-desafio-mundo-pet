import { apiConfig } from "./api-config";

export async function getSchedules(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const schedules = await response.json();

    const schedulesFilteredByDate = schedules.filter(
      (schedule) => date === schedule.date
    );

    return schedulesFilteredByDate;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
