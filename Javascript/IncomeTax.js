document.getElementById('calculateButton').addEventListener('click', function () {
  var taxableIncome = parseFloat(document.getElementById('taxableIncome').value);
  var incomeTax = 0;

  if (taxableIncome > 8000000) {
      incomeTax = 3110000 + 0.35 * (taxableIncome - 8000000);
  } else if (taxableIncome > 2000000) {
      incomeTax = 490000 + 0.32 * (taxableIncome - 2000000);
  } else if (taxableIncome > 800000) {
      incomeTax = 130000 + 0.3 * (taxableIncome - 800000);
  } else if (taxableIncome > 400000) {
      incomeTax = 30000 + 0.25 * (taxableIncome - 400000);
  } else if (taxableIncome > 250000) {
      incomeTax = 0.2 * (taxableIncome - 250000);
  }

  document.getElementById('result').innerHTML = "<br><br><strong>Income Tax:</strong> ₱" + incomeTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
});

document.getElementById('clearButton').addEventListener('click', function () {
  document.getElementById('taxableIncome').value = '';
  document.getElementById('result').innerHTML = '';
});