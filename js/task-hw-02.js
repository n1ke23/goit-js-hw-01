// 'use strict';

const total = 100;
let ordered = 50;

// ordered = 20;
// ordered = 80;
//  ordered = 130;

if (total > ordered) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}


total > ordered ? console.log("На складе недостаточно твоаров!") : console.log("Заказ оформлен, с вами свяжется менеджер");