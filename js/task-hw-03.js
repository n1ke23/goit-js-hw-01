// 'use strict';

const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введите пожалуйста кодовое слово!");

// if (boolean(message) === false) {
// console.log("Отменено пользователем!");
// } 
 if (message === null) {
  console.log("Отменено пользователем!");
} 
else if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
 } 

else if (message !== ADMIN_PASSWORD) {
  console.log("Доступ запрещен, неверный пароль!");
}
 console.log(typeof message);

