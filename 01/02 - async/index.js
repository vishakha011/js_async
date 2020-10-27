/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// My guess : first Partnah then Howdy - 
/*Procedure: 
- the setTimeout will go to the web browser API since it is a asynchronous peice of code after 0 msec the callback function will move into the callback queue
- console.log is pushed to the top of the call stack, after execution is returns "Partnah"
- Event loop looks into the call stack and determine if the call stack is empty or not. If it is empty,Event loop pushes the callback to the top of the stack.*/
 
testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => {
    console.log("Welcome")
  }, 3000)
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("Hello");

  setTimeout(() => {
    console.log("good bye")
  }, 2000)
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => {
    console.log("Hi again")
  }, 1000);
}


// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  let repeatHi = setInterval(() => {
    console.log("Hi for now")
  }, 1000);

  setTimeout(() => {
    clearInterval(repeatHi)
  }, 5000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  let timerId = setInterval(func, `${interval}` * 1000);

  setTimeout(() => {
    clearInterval(timerId)
  }, `${duration}` * 1000);

};

// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
