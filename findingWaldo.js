// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  function waldoLocal(currrentValue, index){
  if (currrentValue === "Waldo"){
    found(index);
  }
}
arr.forEach(waldoLocal);
}
function actionWhenFound(index){
  console.log(index);
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
//console.log(findWaldo["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
//calling 2 functions
//1) findoWaldo with an array and a found.
//2) calling another function called actionWhenFound.

//Refactor the function findWaldo to use the forEach() method instead of a for loop.
// var clothes = ["jeans","capris","skinnys","dresses"];

// function fashionable(item, index, array){ // function that makes things fashionale
// console.log(item + " are fashionable");
// }

// clothes.forEach(fashionable)
