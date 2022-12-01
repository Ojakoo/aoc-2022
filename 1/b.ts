export const x = "";

const text: string = await Deno.readTextFile("./input.txt");
const arr: Array<string> = text.split("\n");

let count = 0;
let top = [0, 0, 0];

arr.forEach((element) => {
  if (element === "") {
    if (count > top[0]) {
      top.unshift(count);
    } else if (count > top[1]) {
      top.splice(1, 0, count);
    } else if (count > top[2]) {
      top.splice(1, 0, count);
    }
    count = 0;
  } else {
    count += Number(element);
  }
});

const sum = top[0] + top[1] + top[2];

console.log(sum);