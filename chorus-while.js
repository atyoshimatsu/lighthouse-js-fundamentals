const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

const anotherChorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(anotherChorus);
}
console.log("Until the sun comes up!");