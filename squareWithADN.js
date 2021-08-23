//0 0 0 0 0 0 0
//o           0
//0           0
//0           0
//0           0
//0           0
//0 0 0 0 0 0 0
const ADN = (n, m) => {
  // let n = 7; // so phan tu cau tao nen 1 doan ma gen
  // let m = 3; // tong so doan ma gen
  let str = '';
  for (let a = 1; a <= m; a++) {
    for (let i = 1; i <= n; i++) {
      //   if (i == 1 || i == n) console.log('0');
      for (let j = 1; j <= n; j++) {
        // str += '0';
        // if (i == 1 || i == n || j == 1 || j == n) str += '0';//cong thuc print hinh vuong
        let x = n + 1 - i;
        if ((i == j) == 1 || (i == j) == n || j == x) str += '0';
        else str += ' ';
        if (j == n) str += '\n';
      }
    }
  }
  console.log(str);
};
// ADN(8, 4);
const square = (n) => {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n + 1; j++) {
      //   if (j % 2 == 1||j==1||) str += 0;
      if (((i == 1 || i == n) && j % 2 == 1) || j == 1 || j == 2 * n + 1)
        str += '0';
      else str += ' ';
      if (j == 2 * n + 1) str += '\n';
    }
  }
  console.log(str);
};
square(5);
