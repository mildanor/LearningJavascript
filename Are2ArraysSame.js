function mutation(arr) {
  var array1 = arr[0].toLowerCase().split('');
  var array2 = arr[1].toLowercase().split('');
  var temp = 0;
  
  for (var s in array2) {
  if (array1.indexOf(array2[s]) > -1){
  temp +=0;
  
  } else 
    
   temp+=1;
 
  }

  if (temp === 0)
    return true;
  else
    return false;
    

  
}

mutation(["Hello", "hey"]);

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.