🎬 MovieApp

A frontend movie browsing application built with React.js, developed as a practice project to strengthen core React concepts and component-based development. The project focuses on UI implementation and React fundamentals rather than serving as a production-ready application.

📖 Overview

MovieApp is a responsive movie discovery interface that fetches and displays dynamic movie data from the OMDb API. It was built to reinforce practical, hands-on experience with React's component architecture, state management, and API integration.

🚀 Features
Clean, responsive movie application UI
Reusable, modular React components
Dynamic movie data fetched from the OMDb API
Horizontally scrollable movie card sections
Multi-page navigation (Home, Login, Player)
Custom CSS styling throughout
Organized, scalable project structure
🛠️ Tech Stack
Category	Technology
Library	React.js
Language	JavaScript (ES6+)
Markup/Styling	HTML5, CSS3
Build Tool	Vite
Data Source	OMDb API
📁 Project Structure
MovieApp/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── TittleCards/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
🎯 Purpose of the Project

This project was built primarily to practice core React concepts through a real-world style frontend application. Key concepts explored include:

Component-based architecture
Props and component communication
React Hooks: useState, useEffect, useRef
Data fetching with the Fetch API
Rendering dynamic lists with .map()
Conditional rendering
Component reusability
Structuring a scalable React project
Working with environment variables
Basic third-party API integration
🔌 API Integration

Movie data is dynamically fetched from the OMDb API, with the API key stored securely as an environment variable.

⚙️ Installation & Setup
Clone the repository
bash
   git clone https://github.com/your-username/your-repository-name.git
Navigate into the project directory
bash
   cd your-repository-name
Install dependencies
bash
   npm install
Configure environment variables Create a .env file in the project root and add your OMDb API key:
   VITE_OMDB_API_KEY=your_api_key_here
Run the development server
bash
   npm run dev
👨‍💻 About This Project

This is a learning project built as part of an ongoing journey to improve React and frontend development skills. It is intended for educational and practice purposes rather than production use.

📄 License

This project is open source and available for learning purposes.
