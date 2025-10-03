const fs = require("fs");
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not cleaned:",err);
  } else {
    fs.writeFile("test.txt", fileCleaner(data), (err2) => {
      if (err2) {
        console.log("File not cleaned");
      } else {
        console.log("File cleaned");
      }
    });
  }
});

const fileCleaner = (input) => {
  input = input.trim();
  let temp = "";
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      if (!temp.length) {
        continue;
      } else {
        ans += temp;
        ans += " ";
        temp = "";
      }
    } else {
      temp += input[i];
    }
  }
  if (temp.length) {
    ans += temp;
  }
  if (ans[ans.length - 1] == " ") {
    ans = ans.slice(0, ans.length - 1);
  }
  return ans;
};
