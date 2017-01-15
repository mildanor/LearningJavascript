function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arr);
  
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Remove all elements from the initial array that are of the same value as these arguments.