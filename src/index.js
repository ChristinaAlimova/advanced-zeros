module.exports = function getZerosCount(number, base) {
  let count = 0;
  let result = 0;
  let resultArr = [];
  let obj = {};
  let currentDivider = 0;

  for(let i = 2; i <= base;) {
    if (base % i != 0) {
      if (count != 0) {
        obj[i] = count;
        count = 0;
      }
      i++;
      continue;
    }
    else {
      base = base / i;
      count++;
      currentDivider = i;
    }
  }
  obj[currentDivider] = count;
  
  for(let key in obj){
    let tempNumber = number;
    result = 0;
    while(key <= tempNumber){
      tempNumber = parseInt(tempNumber / key);
      result = result + tempNumber;
    }
    result = parseInt(result / obj[key])
    resultArr.push(result);
  }

  return Math.min.apply(null, resultArr);
}