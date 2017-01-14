function truncateString(str, num) {
if(str.length > num && num > 3){
    str = str.slice(0,num-3);
    str += "...";
  }else if (num <= 3){
    str = str.slice(0,num);
    str += '...';
  }
  return str;
}