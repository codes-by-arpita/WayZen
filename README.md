# 🌍 WayZen

WayZen is a Flask-based smart map web application that combines secure user authentication with an interactive Mapbox-powered navigation experience. Users can sign up, log in, explore maps, search places, access live location, and get directions in a sleek modern interface.

## ✨ Features

### 🔐 User Registration & Login System
- 👤 Login using username or email

### 🗺️ Interactive full-screen Mapbox map
- 📍 Click anywhere on map to drop markers
- 🔎 Search places instantly
- 📡 Detect current location with geolocation
- 🚗 Turn-by-turn route directions
- 🎛️ Navigation, fullscreen & scale controls

### 💾 Database & UI
- 💾 User data stored in MySQL database
- 🎨 Responsive and modern UI design

## 🛠️ Tech Stack

**Backend**
- Python
- Flask
- Flask-SQLAlchemy

**Frontend**
- HTML5
- CSS3
- JavaScript

**Database**
- MySQL
- PyMySQL

**Maps & APIs**
- Mapbox GL JS
- Mapbox Search Box API
- Mapbox Directions API

## 📁 Project Structure

```text
WayZen/
│-- app.py
│-- requirements.txt
│
├── templates/
│   ├── layout.html
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   └── map.html
│
└── static/
    ├── css/
    │   ├── style.css
    │   ├── auth.css
    │   └── map.css
    │
    ├── js/
    │   └── script.js
    │
    ├── assets/
    └── svg/
```

## ⚙️ Prerequisites

- Python 3.9+
- Mapbox Access Token
- A database instance

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
SECRET_KEY=your_secret_key
DATABASE_URL=mysql+pymysql://root:password@localhost/wayzen_db
MAPBOX_ACCESS_TOKEN=your_mapbox_token
```

## 🚀 Installation

### 1️⃣ Clone Repository
```bash
git clone <your-repo-url>
cd WayZen
```

### 2️⃣ Create Virtual Environment
```bash
python -m venv venv
```

### 3️⃣ Activate Environment

**Windows (PowerShell)**
```powershell
.\venv\Scripts\Activate.ps1
```

**macOS/Linux**
```bash
source venv/bin/activate
```

### 4️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

## 🗄️ Database Setup

Create database:
```sql
CREATE DATABASE wayzen_db;
```

Then run:
```python
python
from app import app, db
with app.app_context():
    db.create_all()
```

## ▶️ Run Project Locally

```bash
python app.py
```

Open in browser: [http://127.0.0.1:5000](http://127.0.0.1:5000)

## 🌐 Application Flow

- `/` → Landing Page
- `/signup` → Register new account
- `/login` → Login page
- `/map` → Interactive map dashboard (Search places, directions, geolocation, markers)

## 🔒 Security Notes

- Store passwords using hashing 
- Keep API keys private
- Use environment variables
- Restrict Mapbox token usage

## 🚧 Future Improvements

- [ ] Session authentication
- [ ] Save favorite places
- [ ] Route history
- [ ] Dark mode UI
- [ ] Mobile app version
- [ ] Better error handling
- [ ] Deployment on Railway / Render

## 📸 Screenshots

### Home Page
![WayZen Home Page](Images/HomePage.png)

### Login Page
![WayZen Login Page](Images/Login_Page.png)

### Sign Up Page
![WayZen Sign Up Page](Images/SignUp_page.png)

### Map Page
![WayZen Map Page](Images/Map_Page.png)

## 👨‍💻 Author

**Arpita Padhi**
- LinkedIn: [linkedin.com/in/arpita-padhi-506a06322](https://www.linkedin.com/in/arpita-padhi-506a06322)
