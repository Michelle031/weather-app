export const formatDate = (date) => {
  date = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const d = date.getDate();

  var today = new Date(Date.now());
  if (today.getDate() + 1 === d) {
    return "Tomorrow";
  } else {
    return `${day}, ${d} ${month}`;
  }
};
