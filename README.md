# 📡 Real-Time Chat Application with Socket.IO & Express

This is a simple real-time chat application built with **Socket.IO** and **Express.js**. The app allows users to send and receive messages instantly across connected clients, demonstrating the power of WebSockets for real-time communication.

## 🚀 Features

- **Real-Time Messaging**: Instant chat messaging between clients using **Socket.IO**.
- **Express Server**: Serves the frontend and handles HTTP requests.
- **Message Broadcasting**: Messages are broadcast to all users except the sender.
- **ES6 Module Support**: Uses ES6 modules for modern JavaScript functionality.
  
## 🛠 Tech Stack

- **Node.js**: Backend JavaScript runtime.
- **Express.js**: For handling routes and serving static files.
- **Socket.IO**: For enabling real-time, bi-directional communication between server and clients.
- **HTML/CSS**: Frontend for user interface.
  
## 📁 Project Structure

```
/public
  ├── index.html          # Frontend file for chat interface
server.js                 # Main server file with Socket.IO and Express setup
package.json              # Dependencies and scripts
```

## 🛠 Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/socket-io-chat-app.git
    cd socket-io-chat-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm start
    ```
    By default, the app will run on `http://localhost:3030`. Open this URL in your browser.

4. **Open multiple clients**:
    Open multiple tabs or different devices on `http://localhost:3030` and start chatting in real-time.

## 🔑 Key Learnings

- **Socket.IO** simplifies adding real-time functionality to web apps by abstracting WebSocket communication.
- Learned how to handle **broadcasts** where messages are sent to all clients except the sender.
- Gained a deeper understanding of **ES6 modules** in Node.js and how to replace `__dirname` with `fileURLToPath()` for path handling.


### 🔗 Links

- **Socket.IO**: [Socket.IO Documentation](https://socket.io/docs/)
- **Express.js**: [Express.js Documentation](https://expressjs.com/)
