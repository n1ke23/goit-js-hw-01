let input = confirm("Хотите чилса вводить?");
let total = 0;

while (input) {
  input = +prompt();
  total += input;
  console.log(input);
}
alert(`Общая сумма чисел равна ${total}`);
