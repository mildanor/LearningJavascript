function largestOfFour(arr) {
  var ourArr = [];
  for (var n in arr) {
    var LargestNumber = 0;
  for (var sb in arr[n]) {
    if (arr[n][sb] > LargestNumber){
     LargestNumber = arr[n][sb];
    }
  }
  
  results[n] = LargestNumber;
}
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
