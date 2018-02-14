// your control flow code from chapter 2 of eloquent js goes here!
var string = "";
for (var i = 0; i < 7; i++) {
  string += "*"
  console.log(string);
}
//if statement solution
function FizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log("FizzBuzz");
    } else if (i%5 === 0){
      console.log("Buzz");
    } else if (i%3 === 0){
      console.log("Fizz");
    } else {
      console.log(i)
    }
  }
}
FizzBuzz(100);

//switch statement solution
for (var i = 1; i <= 100; i++) {
  switch (true) {
    case i%3 === 0 && i%5 === 0:
      console.log("FizzBuzz");
      break;
    case i%5 === 0:
      console.log("Buzz");
      break;
    case i%3 === 0:
      console.log("Fizz");
      break;
    default:
      console.log(i);
  }
}
//refactored to shortest amount of lines of code
for (var i = 1; i <= 100; i++) {
  var find = i%15 ? i%5 ? i%3 ? console.log(i) : console.log("Fizz") : console.log("Buzz") : console.log("FizzBuzz");
}

