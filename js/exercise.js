// log every number form 0 to 100, but if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenly divisible by 3 and 5 log 'fizzbuzz' if it is not evenly divisiable by either 3 or 5 log the number


for (var x = 0; x < 101; x++) {

  if (x%3===0 && x%5===0) {
  console.log("fizzbuzz")
  }
else if(x%3===0) {
  console.log("fizz")
}

  else if(x%5===0) {
    console.log("buzz")
  }
  else{
    console.log(x);
  }
}
//else if ( x%3 )
