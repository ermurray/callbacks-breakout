# Callbacks Breakout

## Topics
- [ ] what is a callback
- [ ] when do we use them
- [ ] ansync 
- [ ] in the browser

# what is a callback
 - is a function passed as an arg to another function and executed within the scope of the higher order function

 ```js
  const sayHello =  () => {
    return 'Hello, World!';
  }

  // Output: 'say hello' , [Function: sayHello]
  console.log('say hello', sayHello);


 ```