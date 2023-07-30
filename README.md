# Chat Application

This is a simple chat application that allows users to exchange messages in real-time. The application is implemented using WebSocket, Node.js, and the `ws` library to enable bi-directional communication between clients and the server.

## Features

- Real-time messaging with WebSocket
- Random funny usernames and colors for each user
- Broadcasts join and leave messages
- Responsive design for various devices

## Prerequisites

Before running the chat application, make sure you have the following installed on your system:

- Node.js (https://nodejs.org) to run the server

## Installation

1. Clone the repository:

git clone https://github.com/your-username/chat-application.git
cd chat-application

2. Install the required packages:

npm install

## Usage

1. Run the WebSocket server:

npm start

The server will start running on `ws://localhost:8080`.

2. Open the chat application in your web browser by navigating to `http://localhost:3000`.

3. Start chatting with other connected users!

## How it Works

- Users can enter their messages in the input field and click the "Send" button to send messages to the chat.
- The chat application generates a random funny username and color for each user when they join the chat.
- Messages are displayed in chat bubbles, with the user's username and message content.
- When a user joins or leaves the chat, a notification is broadcasted to all users.
- The chat container has a maximum width of 500px and adapts well to different screen sizes.

## Styling

The chat application's interface is styled using CSS and includes subtle animations for chat bubbles and buttons.

## Customization

To add more funny usernames, edit the `funnyUsernames` array in the server-side JavaScript file (`script.js`).

## Contributing

Contributions are welcome! If you find any issues or have ideas to improve the chat application, please open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The chat application is based on WebSocket and the `ws` library.
- Styling inspiration from various sources.

Enjoy chatting with your friends using this simple WebSocket-based chat application!


