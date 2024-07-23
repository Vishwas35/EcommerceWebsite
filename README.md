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
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project and connected to MongoDB (Atlas).

### Database Schema Design

**Product Item Schema**

- `name`: String
- `description`: String
- `price`: Number
- `brand`: String
- `color`: String
- `stock`: Number
- `image`: String

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
