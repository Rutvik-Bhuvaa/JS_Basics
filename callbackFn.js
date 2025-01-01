// callback function

function names(fun) {
  console.log("Hello i am name");
  fun();
}

function greet() {
  console.log("Hello i am callback function ");
}

names(greet);
