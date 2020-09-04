// 'use strict';

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Введите пожалуйста кодовое слово!");

if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else if (Boolean(message) === false) {
  console.log("Отменено пользователем!");
} else if (message !== ADMIN_PASSWORD) {
  console.log("Доступ запрещен, неверный пароль!");
}
console.log(typeof message);
