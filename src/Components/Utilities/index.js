module.exports = {
    toDateTime: (secs) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  },
  
  formatDate: (date) => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateValue = date.getDate();
    var day = date.getDay();
    var monthIndex = date.getMonth();
    //var year = date.getFullYear();
  
    return weekday[day] + ", " + dateValue + " " + monthNames[monthIndex];
  }
}