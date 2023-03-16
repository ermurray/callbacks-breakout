console.log('Before call');

setTimeout(() => {
 console.log('Inside setTimeout')
}, 0);

console.log('After call')


const higherOrderFunction =  function(callback) {
  let data = 4

  console.log('Before call 1');
  setTimeout(() => {
    data = 6
    callback(data);
  }, 1000);

  console.log('After call 2');
  return data;
}
  
  
  console.log('Before hof call 3');
  
  const result = higherOrderFunction((result) => {
    console.log('Inside callback 4');
    console.log('result', result);
  });
  
  
  console.log('After hof call 5');