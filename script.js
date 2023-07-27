const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    appendMessage('Connected to the chat.');
});

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data); // Parse the incoming JSON data
    appendMessage(message);
});

socket.addEventListener('close', () => {
    appendMessage('Connection closed. Refresh the page to reconnect.');
});

function sendMessage() {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const colonIndex = message.content.indexOf(':');
    if (colonIndex !== -1) {
        const username = message.content.slice(0, colonIndex);
        const content = message.content.slice(colonIndex + 2);

        // Use the color sent from the server
        const bubbleClass = message.userId === socket.userId ? 'user-bubble' : 'other-user-bubble';
        const usernameClass = message.userId === socket.userId ? 'user-username' : 'other-user-username';
        messageElement.innerHTML = `
            <div class="message-container">
                <span class="${usernameClass}">${username}</span>
                <div class="chat-bubble ${bubbleClass}" style="background-color: ${message.color};">
                    ${content}
                </div>
                <br>
            </div>
        `;
    } else {
        messageElement.innerText = message.content;
    }
}

function clearMessages() {
    chatMessages.innerHTML = '';
}
