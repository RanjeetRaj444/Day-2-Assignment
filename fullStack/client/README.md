# 🟦 Full Stack: useFetch Cache Hook

## 🚀 Overview
This project includes a custom React hook `useFetch` that caches GET requests in `sessionStorage` for 5 minutes. The hook ensures fast responses by using cached data if the request is made within the cache validity period (TTL). 

### 🛠️ Features
- **Caching**: Caches GET requests for 5 minutes in `sessionStorage`.
- **Cache Expiry**: Automatically refreshes data after the TTL expires.
- **Manual Refetch**: Forces a fresh fetch when needed using the `refetch` method.
- **Abort Controller**: Cancels ongoing requests when the component unmounts.
- **Error Handling**: Catches network errors and displays them.

### 🔧 Requirements
- React 18+
- Functional Components

### 🚀 Getting Started


1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Start the app**:
    ```bash
    npm start
    ```

3. The app will be running at `http://localhost:3000`.

---


