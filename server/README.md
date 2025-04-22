# 🟧 Backend: File Upload Service

## 🚀 Overview
This project creates an endpoint that accepts image files (PNG/JPEG) and stores them locally. The service returns the file's URL after successful upload. 

### 🛠️ Features
- **Upload Endpoint**: Accepts PNG/JPEG files and stores them in the `/uploads/` folder.
- **File Type & Size Validation**: Only PNG/JPEG files ≤ 2MB are allowed.
- **Static File Serving**: Uploads are served as static files using `express.static`.
- **Random Filename**: Files are saved with a random UUID and extension for security.

### 🔧 Requirements
- Node.js 14+
- Express
- Multer for handling file uploads
- `dotenv` for environment configuration

### 🚀 Getting Started



1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Configure environment variables**:
    - Copy `.env.example` to `.env`:
    ```bash
    cp .env.example .env
    ```
    - Update `.env` with your desired port and max upload size.

3. **Start the server**:
    ```bash
    npm start
    ```

4. The API will be running at `http://localhost:3000`.

---


