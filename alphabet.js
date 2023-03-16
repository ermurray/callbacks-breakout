const alphabet = () => {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
};

const sayHello =  () => {
  return 'Hello, World!';
}

const higherOrderFunction = (callbackFunction) => {
  console.log('higherOrderFunction has begun running. 1');

  console.log('Running callback... 2');
  

  const callbackResult = callbackFunction();
  console.log('callbackResult: 3', callbackResult);
  
  console.log('Callback has been run. 4');

  console.log('higherOrderFunction has finished running. 5');
};

// Let's try passing a callback into our higher-order function!
higherOrderFunction(alphabet);
higherOrderFunction(() => {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
});

higherOrderFunction(sayHello);
// We can even pass in anonymous functions!
higherOrderFunction(() => {
  return 'Howdy! This is string is in an anonymous function.';
});