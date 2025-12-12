# 📚 Serverless Book Tracker (Frontend)

A modern, fast, and scalable **React + Vite** application for managing personal reading lists.  
This frontend is deployed on **Vercel** and connects to a fully serverless backend powered by **AWS Lambda, DynamoDB, API Gateway, and IAM**.

---

## 🚀 Live Demo
🔗 **Frontend:** https://your-vercel-link  
🔗 **Backend (API):** https://your-api-gateway-url  

---

## 🎯 Features

- Add, update, and delete books
- Mark books as "Read" or "Unread"
- Clean and responsive UI using **Tailwind CSS**
- Fully serverless backend integration
- Uses environment variables for API configuration
- Optimized build using **Vite** for fast loading

---

## 🧩 Tech Stack

### **Frontend**
- React (Hooks)
- Vite
- Tailwind CSS

### **Backend (Separate repo)**
- AWS Lambda (Node.js)
- API Gateway
- DynamoDB
- IAM Roles & Policies

---

## 📁 Project Structure

```
frontend/
│── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── index.html
│── package.json
│── .gitignore
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/RAV1SHCHAUDHARY/serverless-book-tracker-frontend
cd serverless-book-tracker-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env`
(Do NOT commit this file — it is ignored)
```
VITE_API_URL=https://your-api-gateway-url
```

### 4. Run the project
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 🛡 Security & Best Practices

- `.env` and `node_modules` are fully ignored with `.gitignore`
- No API keys committed in the repo
- Uses environment variables with Vite prefix `VITE_`
- Safe for public GitHub showcase

---

## 🧑‍💻 Author

**Ravish Chaudhary**  
📍 New Delhi, India  
🔗 LinkedIn: https://www.linkedin.com/in/ravish-chaudhary-a9b60b28b  
🔗 GitHub: https://github.com/RAV1SHCHAUDHARY

---

## 📜 License
This project is under the **MIT License**. See `LICENSE` file.
