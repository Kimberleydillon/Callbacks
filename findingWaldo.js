// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) { // functions can take different kinds of parameters incl index!
  console.log(index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
//calling 2 functions
//1) findoWaldo with an array and a found.
//2) calling another function called actionWhenFound.