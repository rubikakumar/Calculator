function appendInput(value) {
  const input = document.getElementById('result');
  input.value += value;
}

function performOperation(operator) {
  const input = document.getElementById('result');
  input.value += operator;
}

function calculateResult() {
  const input = document.getElementById('result').value;
  try {
      const result = eval(input);
      document.getElementById('result').value = result;
  } catch (error) {
      alert('Invalid expression');
  }
}

function clearInput() {
  document.getElementById('result').value = '';
}
function deleteInput() {
  const input = document.getElementById('result');
  input.value = input.value.slice(0, -1);
}


document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '%'].includes(key)) {
     
      appendInput(key);
  } else if (key === 'Enter') {
    
      calculateResult();
  } else if (key === 'Backspace') {
     
      const input = document.getElementById('result');
      input.value = input.value.slice(0, -1);
  } else {
     
      alert('Only numbers are allowed');
  }
});
