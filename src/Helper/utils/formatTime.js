// ----------------------------------------------------------------------

import moment from "moment/moment";

export function accoundCreatedDate(date, newFormat) {
  const dateFormat = newFormat || "DD/MM/yyyy";

  console.log(date);

  return date ? moment(date, "DD-MM-YYYY hh:mm:ss a").format(dateFormat) : ""; // 12/12/2023
}

//
export function fNotifiactionDate(date, newFormat) {
  const dateFormat = newFormat || "DD, MMM yyyy";

  return date ? moment(date).format(dateFormat) : ""; // 25, jan 2024
}

export function fromAgoDate(date) {
  return date ? moment(date).startOf("hour").fromNow() : ""; // 12 minutes ago
}

export function fTime(date) {
  return date ? moment(date).format("LT") : ""; // 12:12 PM
}
