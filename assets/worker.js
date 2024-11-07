self.onmessage = function(e) {
  const result = performHeavyCalculation(e.data);
  self.postMessage(result);
};

function performHeavyCalculation(data) {
  // Example heavy computation
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
}
