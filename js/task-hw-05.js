// let userAnswer = prompt('Введите страну');

// let userСountry = (userAnswer + "").toLowerCase() ;

// const china = 'китай';
// const chile = 'чили';
// const australia = 'австралия ';
// const india = 'индия';
// const jamaica = 'ямайка';

// switch (userСountry){
// case china:
//   console.log(`Доставка в ${china} будет стоить 100 кредитов`);
//   break;

//   case chile:
//     console.log(`Доставка в ${chile} будет стоить 250 кредитов`);
//     break;

//     case australia:
//       console.log(`Доставка в ${australia} будет стоить 170 кредитов`);
//       break;

//       case india:
//         console.log(`Доставка в ${india} будет стоить 80 кредитов`);
//         break;

//         case jamaica:
//           console.log(`Доставка в ${jamaica} будет стоить 120 кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// let userAnswer = prompt('Введите страну');

// let userСountry = userAnswer[0].toUpperCase() + userAnswer.substring(1)

// const china = 'китай';
// const chile = 'чили';
// const australia = 'австралия ';
// const india = 'индия';
// const jamaica = 'ямайка';
// let cost;

// switch (userСountry){
// case china:
//   cost = 100;
//   console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
//   break;

//   case chile:
//   cost = 250;
//     console.log(`Доставка в ${chile} будет стоить ${cost} кредитов`);
//     break;

//     case australia:
//       cost = 170;
//       console.log(`Доставка в ${australia} будет стоить ${cost} кредитов`);
//       break;

//       case india:
//         cost = 80;
//         console.log(`Доставка в ${india} будет стоить ${cost} кредитов`);
//         break;

//         case jamaica:
//           cost = 120;
//           console.log(`Доставка в ${jamaica} будет стоить ${cost} кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// ------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------

//  let day = prompt()
// switch  (day) {
// case "monday":
// case "tuesday":
// case "wensesday":
// case "thursday":
// case "friday":
// console.log('Это будний день');
// break;

// case "saturday":
// case "sunday":
// console.log('Это выйходной день');
// break;
// default:
// console.log('Укажите пожалуйста валидный день');
// }

// =============================================================================================

// let day = prompt()
// if (day === 'monday' || day === 'tuesday' || day === 'wensesday' || day === 'thursday' || day === 'friday') {
// console.log('Это будний день');
// }
// else if (day === 'saturday'|| day === 'saturday') {
// console.log('Это выйходной день');
// }
// else {
// console.log('Укажите пожалуйста валидный день');
// }
