
let userAnswer = prompt('Введите страну');

let userСountry = userAnswer.toLowerCase();
let country = userСountry[0].toUpperCase() + userСountry.substring(1);
const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия ';
const india = 'Индия';
const jamaica = 'Ямайка';
let cost;

switch (country) {
  case china:
    cost = 100;
    console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
    break;

  case chile:
    cost = 250;
    console.log(`Доставка в ${chile} будет стоить ${cost} кредитов`);
    break;

  case australia:
    cost = 170;
    console.log(`Доставка в ${australia} будет стоить ${cost} кредитов`);
    break;

  case india:
    cost = 80;
    console.log(`Доставка в ${india} будет стоить ${cost} кредитов`);
    break;

  case jamaica:
    cost = 120;
    console.log(`Доставка в ${jamaica} будет стоить ${cost} кредитов`);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}

