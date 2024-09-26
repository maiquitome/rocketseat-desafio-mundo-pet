import dayjs from "dayjs";
// import weekday from "dayjs/plugin/weekday";
import { addOptions } from "./select";

// dayjs.extend(weekday);

const formDateSelect = document.getElementById("date");
const mainDateSelect = document.getElementById("main-date");

const today = dayjs(new Date()).format("DD/MM/YYYY");

console.log("Hoje", today);
console.log("select", mainDateSelect);

createOption({ date: today, select: mainDateSelect });
createOption({ date: today, select: formDateSelect });

for (let index = 1; index <= 10; index++) {
  const day = dayjs().add(index, "day").format("DD/MM/YYYY");

  createOption({ date: day, select: mainDateSelect });
  createOption({ date: day, select: formDateSelect });
}

function createOption({ date, select }) {
  const option = document.createElement("option");
  option.value = date;
  option.text = date;
  select.appendChild(option);
}

addOptions();
