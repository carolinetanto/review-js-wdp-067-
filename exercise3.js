function printTodayDate() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // Months are zero-based, so we add 1
  let year = today.getFullYear();

  // Formatting the date as "DD/MM/YYYY"
  let formattedDate = `${day}/${month}/${year}`;

  console.log(formattedDate);
  }
  
// Calling the function to print today's date
printTodayDate();

let formattedDate;

function giveTodayDate(formattedDate) {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // Months are zero-based, so we add 1
  let year = today.getFullYear();

  formattedDate = `${day}/${month}/${year}`;
}

console.log(formattedDate)