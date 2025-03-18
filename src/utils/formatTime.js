export const format = (dateStr) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate().toString().padStart(2, "0");
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let dateChange = dateStr
    .replace("yy", year)
    .replace("MM", month)
    .replace("dd", day)
    .replace("hh", hour)
    .replace("mm", minute)
    .replace("ss", seconds);
  return dateChange;
};
