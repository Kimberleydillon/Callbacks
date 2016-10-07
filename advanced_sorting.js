var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
// writing a sorting function (called a custom comparator)
function studentSorter(array){
  array.sort(function(a, b){
    return b.age - a.age;
  });
  array.sort(function(a, b){
    if (a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  });
  return array;
}

console.log(studentSorter(students));