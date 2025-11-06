# VocalLE5-1 Blogging Project

This repository contains the full solution to **Lab Exercise 5**. The project is a simple blogging site with user authentication and post management, using **Angular** for the frontend and **ASP.NET Web API with SQL Server** for the backend.

## **Project Structure**
- `/VocalLE5` - Angular frontend app (developed in VS Code)
- `/VocalLE3` - ASP.NET Web API backend app (developed in Visual Studio 2022)

***

## **Project Features**
- **User Registration:** Create a new account
- **Login/Logout:** Authenticate with session management
- **Posts Management:** 
  - Add a new post
  - List all posts
  - View details of a single post

***

## **Frontend (Angular)**
- Developed in **Visual Studio Code**
- Uses Angular and TypeScript for UI components
- Features:
  - `list-posts` - Display all blog posts
  - `post-detail` - View individual post details
  - `login-page` - User login interface
  - `register-page` - User registration interface
  - `add-post` - Create new blog posts
- Communicates with backend via HTTP requests

***

## **Backend (ASP.NET Web API)**
- Developed in **Visual Studio 2022**
- Handles API requests for:
  - User authentication (login/register)
  - Post CRUD operations (Create, Read, Update, Delete)
- Persists data using **SQL Server Database**

***

## **Setup Instructions**

### **Frontend Setup:**
1. Install Node.js (v16 or higher) and Angular CLI
2. Navigate to the frontend folder:
   ```bash
   cd VocalLE5/VocalLE5
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve --open
   ```
5. The app will open at `http://localhost:4200`

### **Backend Setup:**
1. Open the backend project in **Visual Studio 2022**
2. Restore NuGet packages
3. Configure your SQL Server connection string in `appsettings.json`
4. Run database migrations (if applicable)
5. Start the backend API (ensure the port matches the frontend HTTP configuration)
6. Default API URL: `https://localhost:7xxx` (check your launch settings)

***

## **Technologies Used**
- **Frontend:** Angular, TypeScript, HTML, CSS
- **Backend:** ASP.NET Core Web API, C#
- **Database:** SQL Server
- **Version Control:** Git, GitHub

***

## **Lab Exercise Requirements**

This project fulfills the requirements of **IT128L Laboratory Exercise 5**:
- ✅ User authentication (Register/Login)
- ✅ Post management (Add/List/View)
- ✅ Angular frontend with multiple components
- ✅ ASP.NET Web API backend
- ✅ SQL Server database integration
- ✅ GitHub repository with source code

***

## **Screenshots & Documentation**
- Screenshots of project folder structure, running application, and source code are included in the submitted documentation as per lab requirements.
- Video demonstration recorded and submitted via Blackboard.

***

## **GitHub Repository**
[https://github.com/DivineMike19/VocalLE5-1](https://github.com/DivineMike19/VocalLE5-1)

***

## **Author**
**DivineMike19**

*Created for IT128L Laboratory Exercise 5*  
*Date: November 2025*

***

## **License**
This project is for educational purposes as part of IT128L coursework.
