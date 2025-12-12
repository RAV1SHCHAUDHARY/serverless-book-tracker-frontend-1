# 🏛 Architecture Overview (Frontend + Serverless Backend)

This document explains how the Serverless Book Tracker works end-to-end.

---

## 🔷 Frontend Architecture

- **React (Vite)** provides a fast development environment
- **Tailwind CSS** for styling
- Fetch calls to AWS API Gateway using environment variables
- Deployed on **Vercel**

Flow:

```
UI → Fetch → API Gateway → Lambda → DynamoDB
```

---

## 🔷 Backend Architecture

- **API Gateway** exposes REST endpoints  
- **AWS Lambda** performs CRUD operations  
- **DynamoDB** stores book data  
- **IAM Roles** secure Lambda permissions  

---

## 🔷 Endpoints (Example)

| Method | Path       | Description           |
|--------|------------|-----------------------|
| GET    | /books     | Fetch all books       |
| POST   | /books     | Add a new book        |
| DELETE | /books/:id | Delete a book         |
| PUT    | /books/:id | Update a book status  |

---

## 🛡 Security

- No API keys exposed  
- Only API Gateway URL is used  
- .env stored locally and ignored in Git  

---

## 📦 Deployment Summary

Frontend:  
- Vercel  
- Automatic builds from GitHub  

Backend:  
- Deployed via AWS Console / CLI  
- Lambda + API Gateway stack  
