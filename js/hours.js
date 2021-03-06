const hours = [
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 13:00</td>",
  "<td>Gesloten</td>",
];

const isToday = (date, index) =>
  date === moment().format("dddd D MMMM")
    ? `<tr class="today">${isHoliday(date, index)}</tr>`
    : `<tr>${isHoliday(date, index)}</tr>`;

const holidays = [
  { day: "zaterdag 1 januari", name: "Nieuwjaar" },
  { day: "maandag 18 april", name: "Paasmaandag" },
  { day: "donderdag 26 mei", name: "OLH Hemelvaart" },
  { day: "maandag 6 juni", name: "Pinkstermaandag" },
  { day: "donderdag 21 juli", name: "Nat. feestdag" },
  { day: "maandag 15 augustus", name: "OLV Hemelvaart" },
  { day: "dinsdag 1 november", name: "Allerheiligen" },
  { day: "vrijdag 11 november", name: "Wapenstilstand" },
];

const isHoliday = (date, index) => {
  const holiday = holidays.find((el) => el.day === date);
  return holiday
    ? `<td> ${date} </td><td>Gesloten</td><td>${holiday.name}</td>`
    : `<td> ${date} </td> ${hours[index]}</td>`;
};

const thisWeek = [];
const nextWeek = [];
const pushDays = () => {
  let day = 0;
  while (day < 7) {
    thisWeek.push(moment().startOf("isoWeek").add(day, "days").format("dddd D MMMM"));
    nextWeek.push(
      moment()
        .startOf("isoWeek")
        .add(day + 7, "days")
        .format("dddd D MMMM")
    );
    day++;
  }
};
pushDays();

window.onload = function () {
  const week1 = document.querySelector(".week1");
  const week2 = document.querySelector(".week2");
  thisWeek.map((day, index) => {
    week1.insertAdjacentHTML("beforeend", isToday(day, index));
  });
  nextWeek.map((day, index) => {
    week2.insertAdjacentHTML("beforeend", isToday(day, index));
  });
};
