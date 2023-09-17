document.addEventListener("DOMContentLoaded", function() {
  const chatBox = document.getElementById("chat-box");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  // Funktion zum Senden einer Nachricht
  function sendMessage() {
    const message = messageInput.value;
    if (message) {
      // Hier senden wir die Nachricht an die Netlify Function
      fetch("/.netlify/functions/receiveMessage", {
        method: "POST",
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Nachricht empfangen und gespeichert.
        });

      // Füge die Nachricht zur Chat-Box hinzu
      chatBox.innerHTML += `<div class="message person-1">${message}</div>`;
      // Lösche den Text im Eingabefeld
      messageInput.value = "";

      scrollToBottom(); // Nachrichtencontainer nach unten scrollen
    }
  }

  // Event-Listener für den Senden-Button
  sendButton.addEventListener("click", sendMessage);

  // Funktion zum Scrollen des Nachrichtencontainers nach unten
  function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Beispiel: Füge eine neue Nachricht hinzu und scrolle den Container nach unten.
  function addNewMessage(messageText) {
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = messageText;
    chatBox.appendChild(newMessage);
    scrollToBottom(); // Nach dem Hinzufügen scrollen
  }
});

