# 🚀 Short URL Service

A **fast** and **lightweight** URL shortening service built with **Node.js** and **Express**. Simplify your long URLs into shareable links in seconds!

---

## ✨ Features
- 🔗 Shorten lengthy URLs into compact, user-friendly links
- 🔄 Instant redirection to the original URL
- ⚠️ Robust error handling for invalid URLs

---

## 🛠️ Technologies Used
- **Node.js** ⚡
- **Express.js** 🚀
- **MongoDB** 🗄️ (for URL storage)

---

## 🚀 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Rutuja1104/short-url.git
   cd short-url-service
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/shorturl
   BASE_URL=http://localhost:8001
   ```

4. **Run the Server:**
   ```bash
   npm start
   ```

---

## 📡 API Endpoints

### 1️⃣ Shorten URL
- **Endpoint:** `POST /url`
- **Description:** Generate a short URL.
- **Request:**
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "shortUrl": "http://localhost:3000/abc123"
  }
  ```

### 2️⃣ Redirect to Original URL
- **Endpoint:** `GET /analytics/:shortID`
- **Description:** Redirects to the original URL.
- **Example:** `http://localhost:3000/abc123` → Redirects to `https://example.com`

---

## 📂 Project Structure
```
short-url-service/
├── controllers/   # Business logic
├── models/        # Database schemas
├── routes/        # API routes
├── .env           # Environment variables
├── app.js         # Entry point
├── package.json   # Project metadata
└── README.md      # Project documentation
```

---

## 🤝 Contributing
1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/short-url`)
3. **Commit** your changes (`git commit -m 'Add feature'`)
4. **Push** to the branch (`git push origin feature/short-url`)
5. **Open** a Pull Request

---

## 📄 License
Licensed under the **MIT License**. Feel free to use and modify!

---

## 📬 Contact
Have questions or suggestions? Reach out at [Rutuja Sahare](mailto:rutujasahare2023@gmail.com)

Happy coding! 🎉

