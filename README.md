# 🎓 EasyLearn - Collaborative Learning Platform

A modern, full-stack MERN (MongoDB, Express, React, Node.js) web application for peer-to-peer learning, resource sharing, and collaborative education.

![EasyLearn](https://img.shields.io/badge/MERN-Stack-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎯 Core Features
- **User Authentication** - Secure JWT-based authentication with bcrypt password hashing..
- **Resource Sharing** - Upload and share educational resources with the community..
- **Q&A Forum** - Ask questions and get answers from peers..
- **Discussion Forums** - Engage in topic-based discussions..
- **Profile Management** - Customize your profile with avatar upload..
- **Bookmark System** - Save your favorite resources for later..
- **Theme Toggle** - Switch between light and dark modes..

### 📚 Resources
- Browse educational resources by category
- Embedded YouTube video tutorials
- Course thumbnails with category-specific images
- Rating and review system
- View count tracking
- Difficulty level indicators (Beginner, Intermediate, Advanced)
- Tag-based filtering

### 💬 Q&A System
- Post questions with code snippets
- Markdown support for formatting
- Upvote/downvote answers
- Accept best answers
- Category-based organization

### 🗣️ Discussions
- Create discussion threads
- Reply to discussions
- Like/unlike posts
- Topic categorization

### 👤 User Profiles
- Personal information management
- Profile picture upload (base64)
- Bio and expertise showcase
- View user statistics
- Saved resources section
- Activity tracking

### 🎨 UI/UX Features
- Responsive design for all devices
- Modern gradient-based UI
- Smooth animations and transitions
- Loading states and error handling
- Toast notifications
- Accessible design

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Context API** - State management
- **CSS3** - Styling with custom properties

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Express Validator** - Input validation
- **Express Rate Limit** - API rate limiting

### Development Tools
- **Nodemon** - Auto-restart server
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Clone Repository
```bash
git clone https://github.com/adityasingh1409/EasyLearn.git
cd EasyLearn
```

### Backend Setup
```bash
# Navigate to backend directory of node 
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# MONGO_URI=mongodb://localhost:27017/peer-learning
# JWT_SECRET=your_secret_key
# PORT=5000

# Seed database (first time only)
node seed.js

# Start backend server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend directory of react
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env
# REACT_APP_API_URL=http://localhost:5000

# Start frontend
npm start
```

### Access Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 📖 Usage

### Default Test Accounts
```
Email: john@example.com
Password: password123

Email: jane@example.com
Password: password123

Email: mike@example.com
Password: password123
```

### Creating New Account
1. Navigate to http://localhost:3000/register
2. Fill in registration form
3. Login with your credentials

### Uploading Resources
1. Login to your account
2. Navigate to Resources page
3. Click "Upload Resource"
4. Fill in details and submit

### Asking Questions
1. Go to Q&A section
2. Click "Ask Question"
3. Write your question with details
4. Submit and wait for answers

## 📁 Project Structure

```
EasyLearn/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   ├── resourceController.js
│   │   ├── questionController.js
│   │   ├── discussionController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js            # JWT authentication
│   │   ├── error.js           # Error handling
│   │   └── upload.js          # File upload
│   ├── models/
│   │   ├── User.js
│   │   ├── Resource.js
│   │   ├── Question.js
│   │   └── Discussion.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── resources.js
│   │   ├── questions.js
│   │   ├── discussions.js
│   │   └── users.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env.example
│   ├── server.js              # Entry point
│   ├── seed.js                # Database seeder
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar/
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Auth/
│   │   │   ├── Resources/
│   │   │   ├── Questions/
│   │   │   ├── Discussions/
│   │   │   └── Profile/
│   │   ├── services/
│   │   │   └── index.jsx      # API calls
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

## 🔌 API Documentation

### Authentication
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user
PUT    /api/auth/profile     - Update profile
PUT    /api/auth/password    - Change password
```

### Resources
```
GET    /api/resources        - Get all resources
GET    /api/resources/:id    - Get single resource
POST   /api/resources        - Create resource (auth)
PUT    /api/resources/:id    - Update resource (auth)
DELETE /api/resources/:id    - Delete resource (auth)
POST   /api/resources/:id/rate - Rate resource (auth)
```

### Questions
```
GET    /api/questions        - Get all questions
GET    /api/questions/:id    - Get single question
POST   /api/questions        - Create question (auth)
PUT    /api/questions/:id    - Update question (auth)
DELETE /api/questions/:id    - Delete question (auth)
POST   /api/questions/:id/answers - Add answer (auth)
PUT    /api/questions/:id/answers/:answerId/vote - Vote answer (auth)
```

### Discussions
```
GET    /api/discussions      - Get all discussions
GET    /api/discussions/:id  - Get single discussion
POST   /api/discussions      - Create discussion (auth)
PUT    /api/discussions/:id  - Update discussion (auth)
DELETE /api/discussions/:id  - Delete discussion (auth)
POST   /api/discussions/:id/replies - Add reply (auth)
PUT    /api/discussions/:id/like - Like discussion (auth)
```

### Users
```
GET    /api/users/:id        - Get user profile
GET    /api/users/:id/resources - Get user resources
GET    /api/users/:id/questions - Get user questions
POST   /api/users/bookmark/resource/:id - Bookmark resource (auth)
DELETE /api/users/bookmark/resource/:id - Unbookmark resource (auth)
GET    /api/users/bookmarks/resources - Get bookmarked resources (auth)
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aditya Singh**
- GitHub: [@adityasingh1409](https://github.com/adityasingh1409)
- Email: adityasingh28240@gmail.com

## 🙏 Acknowledgments

- Unsplash for course images
- React Icons for UI icons
- MongoDB for database
- All contributors and users

## 📞 Support

For support, email adityasingh28240@gmail.com or open an issue in the repository.

---

Made with ❤️ by Aditya Singh
