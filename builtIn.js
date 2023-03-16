const numArr = [2, 4, 6, 8, 10, 12];
const end = 100;

// for (let i = 0; i < end; i ++) {
//   // do some work here
//   if( numArr[i] === 8) {
//     console.log(`yes ${numArr[i]} exists`)
//     return
//   }
//   console.log('num', numArr[i])
// }

// for (const num of numArr) {
//   if( num === 8) {
//     console.log(`yes ${num} exists`)
//     return;
//   }
//   console.log('num', num)
// }

// numArr.forEach((num, i, arr) => {
//   if( num === 8) {
//     console.log(`yes ${num} exists`)
//     return;
//   }
//   console.log('num', num)
// })

const customForEach = (arr, cb) => {
  for( const num of arr ) {
    cb(num);
  }
}

const myCallback = (num) => {
  if( num === 8) {
    console.log(`yes ${num} exists`)
    return;
  }
  console.log('num', num)
};

// customForEach(numArr, myCallback);

const newArr = numArr.map((num) => num * 2);


console.log('numbers og', numArr);
console.log('numbers x 2', newArr);
