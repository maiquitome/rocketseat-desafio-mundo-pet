import { apiConfig } from "./api-config.js";

export async function newSchedule({
  id,
  tutor_name,
  pet_name,
  fone,
  service_description,
  date,
  time,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        tutor_name,
        pet_name,
        fone,
        service_description,
        date,
        time,
      }),
    });
    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
