

# eStore Project

This project is an eCommerce application built with Vite for the frontend, Express for the backend, and
MongoDB as the database. It provides functionalities to manage products, users, and orders.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Commands Recap](#commands-recap)
- [Publishing to GitHub](#publishing-to-github)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (locally or on a cloud service like MongoDB Atlas)

### Clone the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/iamsahilparashar/shopEase
   cd estore
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd server

#Install the dependencies:
npm install

#env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopEase

#Start the backend server:
npm start

#Frontend Setup
Navigate to the frontend directory:
cd ../client

#Install the dependencies:
npm install

#Start the frontend development server:

npm run dev
Open your browser and navigate to http://localhost:5173/

Use the backend server URL (http://localhost:3000) to access the API endpoints.

#Features
User authentication and authorization
Product management (CRUD operations)
Order management (CRUD operations)
Responsive UI
Technologies
Frontend: Vite, React, Axios
Backend: Express, Node.js, MongoDB, Mongoose
Styling: Tailwind CSS

#Folder Structure

shopEase/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json

#Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

#License
This project is licensed under the MIT License - see the LICENSE file for details.





