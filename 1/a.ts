export const x = "";

const text: string = await Deno.readTextFile("./input.txt");
const arr: Array<string> = text.split("\n");

let count = 0;
let max = 0;

arr.forEach((element) => {
  if (element === "") {
    if (count > max) {
      max = count;
    }
    count = 0;
  } else {
    count += Number(element);
  }
});

console.log(max);
