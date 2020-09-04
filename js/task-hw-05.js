// let userAnswer = prompt('Введите страну');

// let userСountry = (userAnswer + "").toLowerCase() ;

// const china = 'китай';
// const chili = 'чили';
// const austriya = 'австралия ';
// const indiya = 'индия';
// const yamajka = 'ямайка';

// switch (userСountry){
// case china:
//   console.log(`Доставка в ${china} будет стоить 100 кредитов`);
//   break;

//   case chili:
//     console.log(`Доставка в ${chili} будет стоить 250 кредитов`);
//     break;

//     case austriya:
//       console.log(`Доставка в ${austriya} будет стоить 170 кредитов`);
//       break;

//       case indiya:
//         console.log(`Доставка в ${indiya} будет стоить 80 кредитов`);
//         break;

//         case yamajka:
//           console.log(`Доставка в ${yamajka} будет стоить 120 кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// let userAnswer = prompt('Введите страну');

// let userСountry = userAnswer[0].toUpperCase() + userAnswer.substring(1)

// const china = 'китай';
// const chili = 'чили';
// const austriya = 'австралия ';
// const indiya = 'индия';
// const yamajka = 'ямайка';
// let cost;

// switch (userСountry){
// case china:
//   cost = 100;
//   console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
//   break;

//   case chili:
//   cost = 250;
//     console.log(`Доставка в ${chili} будет стоить ${cost} кредитов`);
//     break;

//     case austriya:
//       cost = 170;
//       console.log(`Доставка в ${austriya} будет стоить ${cost} кредитов`);
//       break;

//       case indiya:
//         cost = 80;
//         console.log(`Доставка в ${indiya} будет стоить ${cost} кредитов`);
//         break;

//         case yamajka:
//           cost = 120;
//           console.log(`Доставка в ${yamajka} будет стоить ${cost} кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// ------------------------------------------------------------------------------------------------------------


// let userAnswer = prompt('Введите страну');

// let userСountry = userAnswer[0].toUpperCase() + userAnswer.substring(1)

// const china = 'китай';
// const chili = 'чили';
// const austriya = 'австралия ';
// const indiya = 'индия';
// const yamajka = 'ямайка';
// let cost;

// switch (userСountry){
// case china:
//   cost = 100;
//   console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
//   break;

//   case chili:
//   cost = 250;
//     console.log(`Доставка в ${chili} будет стоить ${cost} кредитов`);
//     break;

//     case austriya:
//       cost = 170;
//       console.log(`Доставка в ${austriya} будет стоить ${cost} кредитов`);
//       break;

//       case indiya:
//         cost = 80;
//         console.log(`Доставка в ${indiya} будет стоить ${cost} кредитов`);
//         break;

//         case yamajka:
//           cost = 120;
//           console.log(`Доставка в ${yamajka} будет стоить ${cost} кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

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

let day = prompt()
if (day === 'monday' || day === 'tuesday' || day === 'wensesday' || day === 'thursday' || day === 'friday') {
console.log('Это будний день');
}
else if (day === 'saturday'|| day === 'saturday') {
console.log('Это выйходной день');
}
else {
console.log('Укажите пожалуйста валидный день');
}