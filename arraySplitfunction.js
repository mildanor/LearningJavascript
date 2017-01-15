function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var sliced = [];
  
  for (var a in arr){
    if (a % size !== size -1)
      newArray.push(arr[a]);
    else {
      
      newArray.push(arr[a]);
      sliced.push(newArray);
      newArray = [];
    }
    
  }
  
  if (newArray.length !== 0)
  sliced.push(newArray);
  return sliced;
  
}

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2);
