const randomHexColor = (255255).toString(16);
// console.log(
//   randomHexColor,
//   randomHexColor.substring(2, 8),
//   randomHexColor.substr(2, 6)
// );
const randomFn = () => {
  let random = Math.random();

  // while (random != 0.01) {
  //   random = Math.random();
  // }
  let test = `${Math.random()}`;
  let l = test.substring(2).length;

  for (let i = 0; i <= 100000000; i++) {
    // console.log(test, l);
    if (l >= 6) {
      test = `${Math.random()}`;
      l = test.substring(2).length;
    } else {
      console.log('done', test);
      break;
    }
  }
};
randomFn();
