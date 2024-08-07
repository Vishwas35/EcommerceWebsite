# EcommerceWebsite

**Student Name**: Vishwas kalpeshbhai Zalavadiya  
**Student Number**: 8980278  
**Date**: 22/07/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js  
**Database**: MongoDB(Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: To Run React Project you have to go inside react_project folder and install node modules after that start npm. You can use npm install and npm run commands for installing node modules and start app.
3. **Backend Setup**: To Run Node Project you have to go inside node_project folder and install node modules after that start server. You can use npm install and node server.js commands for installing node modules and start server.

### Database Schema Design

**Product Item Schema**

- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `brand`: String
- `stock`: Number
- `image`: String

**Category Item Schema**

- `name`: String
- `description`: String

**Order Item Schema**

- `orderId`: ObjectId
- `productId`: ObjectId
- `quantity`: Number
- `price`: Number

**Cart Item Schema**

- `userId`: ObjectId
- `productId`: ObjectId
- `quantity`: Number

**Order Schema**

- `userId`: ObjectId
- `totalAmount`: String
- `createdAt`: Date

**Users Schema**

- `username`: String
- `password`: String
- `isAdmin`: Boolean

### Frontend Setup
- 

### Backend Setup
- 

### Notes

- The project is set up using GitHub for version control.
- Added Databse Schema's Visual Representation in this.
