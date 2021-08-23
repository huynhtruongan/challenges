let randomNumberVal = document.body.querySelector('.random-number');
let buttonGenerate = document.body.querySelector('.btn-generate');

const randomNumber = () => {
  let val = Math.round(Math.random() * 10 ** 6);
  while (val <= 99999) {
    val = Math.round(Math.random() * 10 ** 6);
  }
  return val;
};
buttonGenerate.addEventListener('click', () => {
  randomNumberVal.innerHTML = `${randomNumber()}`;
});
// const test = () => {
//   for (let i = 0; i <= 1000; i++) {
//     let test = randomNumber();
//     // if (test <= 99999) {
//     //   console.log('fail');
//     //   break;
//     // }
//     if (test == 844523) {
//       console.log('jackpot');
//       //   break;
//     }
//   }
//   console.log('done');
// };
