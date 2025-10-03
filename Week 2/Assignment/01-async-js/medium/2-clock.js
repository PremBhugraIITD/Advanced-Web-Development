// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM:SS (Eg. 13:45:23)

//  - HH:MM:SS AM/PM (Eg 01:45:23 PM)

const hour12 = () => {
  let count = 0;
  let ans = "";
  let date = new Date(2024, 11, 30, 24, 59, 55);
  let hours = date.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  ans += hours + ":";
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  ans += minutes + ":";
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  ans += seconds;
  let temp = ans.slice(0, 2);
  temp = parseInt(temp);
  if (temp < 12) {
    ans += " AM";
    if (!temp) {
      ans = "12" + ans.slice(2);
    } else if (temp < 10) {
      ans = "0" + temp + ans.slice(2);
    } else {
      if (temp % 10 == 1) {
        ans = "11" + ans.slice(2);
      } else {
        ans = "10" + ans.slice(2);
      }
    }
  } else {
    ans += " PM";
    temp -= 12;
    if (!temp) {
      ans = "12" + ans.slice(2);
    } else if (temp < 10) {
      ans = "0" + temp + ans.slice(2);
    } else {
      if (temp % 10 == 1) {
        ans = "11" + ans.slice(2);
      } else {
        ans = "10" + ans.slice(2);
      }
    }
  }
  console.log(ans);
  count++;
  let newSeconds = parseInt(seconds);
  let newMinutes = parseInt(minutes);
  let newHours = parseInt(hours);
  setInterval(() => {
    newSeconds = parseInt(seconds) + count;
    newMinutes = parseInt(newMinutes);
    newHours = parseInt(newHours);
    if (newSeconds == 60) {
      newMinutes++;
    }
    if (newMinutes >= 60) {
      newMinutes = 0;
      newHours++;
    }
    if (newHours >= 24) {
      newHours = 0;
    }
    newSeconds = newSeconds % 60;
    newHours = newHours < 10 ? "0" + newHours : newHours;
    newMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes;
    newSeconds = newSeconds < 10 ? "0" + newSeconds : newSeconds;
    ans = newHours + ":" + newMinutes + ":" + newSeconds;
    temp = ans.slice(0, 2);
    temp = parseInt(temp);
    if (temp < 12) {
      ans += " AM";
      if (!temp) {
        ans = "12" + ans.slice(2);
      } else if (temp < 10) {
        ans = "0" + temp + ans.slice(2);
      } else {
        if (temp % 10 == 1) {
          ans = "11" + ans.slice(2);
        } else {
          ans = "10" + ans.slice(2);
        }
      }
    } else {
      ans += " PM";
      temp -= 12;
      if (!temp) {
        ans = "12" + ans.slice(2);
      } else if (temp < 10) {
        ans = "0" + temp + ans.slice(2);
      } else {
        if (temp % 10 == 1) {
          ans = "11" + ans.slice(2);
        } else {
          ans = "10" + ans.slice(2);
        }
      }
    }
    console.log(ans);
    count++;
  }, 1000);
};

// hour12();

const hour24 = () => {
  let count = 0;
  let ans = "";
  let date = new Date(2024, 11, 30, 23, 59, 55);
  let hours = date.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  ans += hours + ":";
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  ans += minutes + ":";
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  ans += seconds;
  console.log(ans);
  count++;
  let newSeconds = parseInt(seconds);
  let newMinutes = parseInt(minutes);
  let newHours = parseInt(hours);
  setInterval(() => {
    newSeconds = parseInt(seconds) + count;
    newMinutes = parseInt(newMinutes);
    newHours = parseInt(newHours);
    if (newSeconds == 60) {
      newMinutes++;
    }
    if (newMinutes >= 60) {
      newMinutes = 0;
      newHours++;
    }
    if (newHours >= 24) {
      newHours = 0;
    }
    newSeconds = newSeconds % 60;
    newHours = newHours < 10 ? "0" + newHours : newHours;
    newMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes;
    newSeconds = newSeconds < 10 ? "0" + newSeconds : newSeconds;
    ans = newHours + ":" + newMinutes + ":" + newSeconds;
    console.log(ans);
    count++;
  }, 1000);
};

hour24();
