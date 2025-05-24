const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  n = Number(n); // Ensure n is treated as a number
  const result = [];
  let current = [];
  let sum = 0;

  for (let num of arr) {
    if (sum + num <= n) {
      current.push(num);
      sum += num;
    } else {
      if (current.length) {
        result.push(current);
      }
      current = [num];
      sum = num;
    }
  }

  if (current.length) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
