function toIsoDate(date) {
  return date.toISOString().split("T")[0];
}
function dayEnd(date) {
  return date.setHours(23, 59, 59, 999);
}
function addDays(days, date = today()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days,
    date.getHours(),
    date.getMinutes()
  );
}
function addMonths(months, date = today()) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + months,
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  );
}
function toObject(date = today(), target = "default", length = "long") {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    monthName: date.toLocaleString(target, { month: length }),
    day: date.getDay(),
    dayName: date.toLocaleString(target, { weekday: length }),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
}

function today() {
  return new Date();
}
function nextDay() {
  return addDays(1);
}
function nextWeek() {
  return addDays(7);
}
function nextMonth() {
  return addMonths(1);
}
export { today, nextDay, nextWeek, nextMonth };
export { toIsoDate, dayEnd, toObject };
