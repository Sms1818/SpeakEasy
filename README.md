# Chat Room Application

Welcome to the Chat Room Application! This application enables users to sign in, create rooms with names and descriptions, and initiate voice chats. Users can also see and join visible chat rooms, request speaking permissions by raising their hand, and have room owners manage permissions.

## Features

- **User Authentication:** Users can sign in to the application to access the chat rooms.
- **Room Creation:** Users can create chat rooms with specific names and descriptions.
- **Voice Chat:** Initiate and participate in voice chats within the created rooms.
- **Visible Chat Rooms:** Users can see a list of available chat rooms and join them.
- **Permission Requests:** Users can request speaking permissions by raising their hand.
- **Permission Management:** Room owners can manage speaking permissions for participants.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** Stream API
- **Styling:** CSS

## Installation

### Prerequisites

- Node.js (version X.X.X or later)
- npm (version X.X.X or later)

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/chat-room-application.git
   cd chat-room-application
2. Install dependencies for both client and server
   cd client
   npm install
   cd ../server
   npm install

3. Create a .env file in the server directory and add your configuration settings:
   PORT=3001
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret

4. cd server
   npm start

5. cd client
   npm run dev


