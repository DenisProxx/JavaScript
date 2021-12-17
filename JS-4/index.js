/*Задание 1*/

// let a = +prompt('Введите первое число',0);
// let b = +prompt('Введите второе число',0);

// function Number(a, b) {
//    if(a < b){
//    return -1;   
//    }
//    else if(a > b){
//    return +1;
//    }
//   else if(a === b){
//    return 0; 
//   }
// };
// alert(Number(a,b));

/*Задание 2*/
// let a = +prompt('Введите число',0);
// function factorial(a){
//     if (a === 0){
//         return 1;
//     }
//     return a * factorial(a-1);
// }
// alert(factorial(a));

/*Задание 3*/
// function number(a, b, c) {
//   let e = +('' + a + b + c)
//   return e
// }
// console.log(number(1, 2, 3));

/*Задание 4*/

// function rectangle(a,b = 0) {
//   if(b == 0) { return a**2; }
//   return a*b;
//   }

//   console.log(rectangle(3));
//   console.log(rectangle(2,4));

/*Задание 5*/

// function PerfectNumber(number) {
//   let perfect = 0;
//      for(let i=1;i<=number/2;i++) {
//            if(number%i === 0) {
//             perfect  += i;
//             }
//        }

//        if(perfect  === number && perfect  !== 0) {
//          console.log("Совершенное число");
//           }  
//         else {
//          console.log("Не совершенное число");
//           }  
//    }
//    PerfectNumber(3);

/*Задание 6*/

// function PerfectNumber(a, b) {
//   let result = [];
//   for (let i = a; i < b; i++) {
//     sum = 0;
//     for (let n = 1; n <= i/2; n++) {
//       if (i % n === 0) sum += n;
//     }
//     if (i === sum) result.push(i);
//   }
//   return result;
// }

// console.log(PerfectNumber(1,1000));

/*Задание 7*/

// const setTime = h => {
//   return (m = 0) => {
//     return (s = 0) => {
//       return `${h}:${m}:${s}`
//     }
//   }
// }

// let time = setTime(23)("01")(58);
// console.log(time);

// function timeStr(t){
//   t=t.split(',').map(i=>!i?'00':i);
//   return t.join(':');
// }
// console.log(timeStr(''));

/*Задание 8*/


// function seconds (a,b,c){

// return (a * 3600) + (b * 60) + c
// }
// console.log(seconds(23,12,35));

/*Задание 9*/

// let seconds = parseInt(123456, 10);

// let hours  = Math.floor(seconds / 3600);
// seconds  -= hours*3600;
// let minutes = Math.floor(seconds / 60);
// seconds  -= minutes*60;
// console.log(+hours+" часа, "+minutes+" минут, "+seconds+" секунд");

/*Задание 10*/

// let date1 = new Date(); 
// let date2 = new Date ("12/12/1990");
// let timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
// let timeDiffInSecond = Math.ceil(timeDiff / 1000); 
// console.log(timeDiffInSecond );