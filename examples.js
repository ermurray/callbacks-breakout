const sayHello =  () => {
  return 'Hello, World!';
}

// Output: 'say hello:' , [Function: sayHello]
// pass by ref
console.log('say hello:', sayHello);


// Output: say hello: Hello World!
// pass by value  
// because function is invoked(called) 
console.log('say hello:', sayHello());

const myObject = {
 stuff: 'some things'
};


const notHoF = (cb) => {
  return cb;
}

const higherOrderFunc = (cb) => {
  return cb();
};
 

console.log('hof', higherOrderFunc(sayHello));

//console.log('bad hof', higherOrderFunc(sayHello())); will error out type is not a function

const myVal = sayHello();
console.log('myVal ', notHoF(myVal));
console.log('not hof', notHoF(sayHello()));

