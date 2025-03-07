// Code your solutions in this file

function writeCards(names = ["Guadalupe", "Ollie", "Aki"], event = "surprise") {
  let messages = [];
  let i = 0;
  while (i < names.length) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    i++;
  }
  return messages;
}
// let callCount = (number)  {
// for (let i = 0; i < 11; i++) {
//   console.log(number[i]);
// }
// }
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
