document.getElementById('text-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const text = document.getElementById('text-input').value;
  document.getElementById('output').textContent = `You entered: ${text}`;
});