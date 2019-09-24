module.exports = function zeros(expression) {
  
  let result = expression.split('*').reduce((sum, current) => {
    
    let step = current.indexOf('!!') > -1 ? 2 : 1;
    let num = Number(current.substr(0, current.length - step));
    
    while(num > 1) {
      sum = getDividers(num, 2, sum);
      num -= step;
    }
    return sum;
  }, {});

  return !result['2'] || !result['5'] ? 0 : Math.min(result['2'], result['5']);
}

function getDividers(num, divider, arr) {
  if(num > divider) {
    if(num%divider === 0) {
      arr = pushToArray(arr, divider);
      num = num/divider;
    } else {
      divider++;
    }
    
    return getDividers(num, divider, arr);
  } else {
    return pushToArray(arr, divider);
  }
}

function pushToArray(arr, i) {
  if(arr[i]) {
    arr[i]++;
  } else {
    arr[i] = 1;
  }
  return arr;
}
