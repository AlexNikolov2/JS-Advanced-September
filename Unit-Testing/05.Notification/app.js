function notify(message) {
  let messageElement = document.getElementById('notification');
  messageElement.textContent = message;
  messageElement.style.display = 'block';
  messageElement.addEventListener('click',() => {
    messageElement.style.display = 'none';
  })
}