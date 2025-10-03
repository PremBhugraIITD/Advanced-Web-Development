function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(1970, 0, 2); // Creating a new date
  console.log("New Date:", newDate);
  console.log(newDate.getTime());
}

// Example Usage for Date Methods
dateMethods();

const func = () => {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a = a + i;
  }
  return a;
};

const before = new Date();
const time1 = before.getTime();
func();
const after = new Date();
const time2 = after.getTime();

console.log(time2-time1); //Time taken by the function to execute.