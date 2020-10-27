Guess the output of the codes below :-

1.
```js
function sayHello() {
  console.log("Hey You Called Me");
}
setTimeout(sayHello, 1000);

console.log("Hey You!");
```

 output:
 "Hey You!"
 "Hey You Called Me"

2.
```js
function sayHello() {
  console.log("Hey You Called Me");
}

setTimeout(sayHello, 0);

console.log("Hey You!");
```
 output:
 "Hey You!"
 "Hey You Called Me"

3.
```js
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```
 output:
 A
 C
 B

4.
```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}
main();

 output:
 A
 C
 B



5. Look at the output of the code below to understand hwo things are happening.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log("A", Date.now() - current);
  setTimeout(function exec() {
    console.log("B", Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log("C", Date.now() - current);
}

main();

```
- Creation of GEC and call stack
- line 21: creation of FEC for console.log
    - logs A with the execution time// output: A  0
- line 86: goes to web browser API
    - after 1000ms, callback function goes to callback queue
    - Event loop looks into the call stack and determine if the call stack is empty or not. If it is empty,Event loop pushes the callback to the top of the stack.
    (Right now, its not empty!)
- line89: runs runWhileLoopForNSeconds for 3 msec
    - logs C with the execution time// output: C  3000
- Call Stack is empty, callback function will be pushed to call stack
    - logs B with the execution time// output: B  3008