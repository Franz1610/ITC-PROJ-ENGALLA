document.getElementById('calculateButton').addEventListener('click', function () {
  var n = parseInt(document.getElementById('numberInput').value);


  var factorial = 1;
  var i = 1;
  while (i <= n) {
      factorial *= i;
      i++;
  }


  var sum = 0;
  var j = 1;
  do {
      sum += j;
      j++;
  } while (j <= n);


  var total = 0;
  for (var k = 1; k <= n; k++) {
      total += k;
  }
  var average = total / n;


  document.getElementById('result').innerHTML =
      `<br><strong>${n}th Factorial:</strong> ${factorial}<br>` +
      `<strong>Sum of the first ${n} numbers:</strong> ${sum}<br>` +
      `<strong>Average of the first ${n} numbers:</strong> ${average.toFixed(2)}`;
});

document.getElementById('clearButton').addEventListener('click', function () {
  document.getElementById('numberInput').value = '';
  document.getElementById('result').innerHTML = '';
});