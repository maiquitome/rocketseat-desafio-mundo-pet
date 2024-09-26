import dayjs from "dayjs";

document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM ESTÁ PRONTO");

  const now = dayjs(new Date());
  const today = now.format("YYYY-MM-DD");

  const dateInput = document.getElementById("date-filter-input");
  dateInput.value = today;
});
