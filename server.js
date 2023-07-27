const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();
const funnyUsernames = [
    'BananaMan',
    'PenguinLover',
    'SuperCactus',
    'CookieMonster',
    'TacoMaster',
    'NinjaPotato',
    'CaptainSloth',
    'MegaPanda',
    'DancingCarrot'
];

wss.on('connection', (ws) => {
    const userId = uuidv4();
    const username = getRandomUsername();
    const color = getRandomColor(); // Generate a random color for the user
    clients.set(userId, { ws, username, color }); // Store the client with user ID, username, and color
    broadcastMessage({ content: `${username} joined the chat. Total users: ${clients.size}`, color });

    ws.on('message', (message) => {
        const { username, color } = clients.get(userId);
        broadcastMessage({ content: `${username}: ${message}`, color });
    });

    ws.on('close', () => {
        const { username } = clients.get(userId);
        clients.delete(userId);
        broadcastMessage({ content: `${username} left the chat. Total users: ${clients.size}`, color: "#000" });
    });
});

function broadcastMessage(message) {
    for (const [, { ws }] of clients) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message)); // Send messages as JSON
        }
    }
}

function getRandomUsername() {
    return funnyUsernames[Math.floor(Math.random() * funnyUsernames.length)];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
