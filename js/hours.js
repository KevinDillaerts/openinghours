const monday = moment().startOf("isoWeek").format("dddd D MMMM");
const hours = [
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 12:00</td>",
  "<td>08:30 - 12:30</td><td>14:00 - 19:00</td>",
  "<td>08:30 - 13:00</td>",
  "<td>Gesloten</td>",
];

console.log(monday);

const holidays = ["maandag 5 april", "Paasmaandag", "zaterdag 1 mei", "Feest v/d arbeid"];
const isHoliday = (date) => holidays.includes(date);

console.log(isHoliday(monday));

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
console.log(thisWeek);
console.log(nextWeek);

window.onload = function () {
  const week1 = document.querySelector(".week1");
  const week2 = document.querySelector(".week2");
  thisWeek.map((day, index) => {
    week1.insertAdjacentHTML(
      "beforeend",
      `<tr>${
        isHoliday(day)
          ? "<td>" + day + "</td><td>Gesloten</td><td>" + holidays[holidays.indexOf(day) + 1] + "</td>"
          : "<td>" + day + "</td>" + hours[index]
      }</td></tr>`
    );
  });
  nextWeek.map((day, index) => {
    week2.insertAdjacentHTML(
      "beforeend",
      `<tr>${
        isHoliday(day)
          ? "<td>" + day + "</td><td>Gesloten</td><td>" + holidays[holidays.indexOf(day) + 1] + "</td>"
          : "<td>" + day + "</td>" + hours[index]
      }</td></tr>`
    );
  });
};

// //deze werkt, dus de DOM selector enz is ok
// // window.onload = function () {
// //   const week1 = document.querySelector(".week1");
// //   week1.innerHTML =
// //     "<tr>  <td>Maandag 5/4</td>  <td>8:30 - 12:30</td>  <td>14:00 - 10:00</td></tr><tr>  <td>Dinsdag 6/4</td>  <td>8:30 - 12:30</td>  <td>14:00 - 10:00</td></tr><tr>  <td>Woensdag 7/4</td>  <td>8:30 - 12:30</td>  <td>14:00 - 10:00</td></tr><tr>  <td>Donderdag 8/4</td>  <td>8:30 - 12:00</td></tr><tr>  <td>Vrijdag 9/4</td>  <td>8:30 - 12:30</td>  <td>14:00 - 10:00</td></tr><tr>  <td>Zaterdag 10/4</td>  <td>8:30 - 13:00</td></tr><tr>  <td>Zondag 11/4</td>  <td>Gesloten</td></tr>";
// // };
