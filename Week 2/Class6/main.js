const input = [1, 2, 3, 4, 5];
const output1 = input.map((item, index) => {
  return item * item; //Square each number
});
console.log(output1);

const output2 = input.filter((item, index) => {
  return index & 1; //Only odd indices
});
console.log(output2);
