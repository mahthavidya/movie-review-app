export const ChangeDate = (date) => {
  let currentDate = new Date(date);
  var fd = currentDate.toDateString();
  // console.log("fd", fd);
  // tempDate.push(fd);
  return fd;
};
