// 'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const quantityDroid = prompt("Какое кол-во Вы хотите купить дройдов?");
const totalPrice = pricePerDroid * quantityDroid;
const newCredits = credits - totalPrice;

if (!quantityDroid) === false) {
  console.log("Отменено пользователем!");
} else if (newCredits < 0) {
  console.log("Недостаточно средств на счету!");
} else if (newCredits >= 0) {
  console.log(
    `Вы купили ${quantityDroid} дроидов, на счету осталось ${newCredits} кредитов.`
  );
}
