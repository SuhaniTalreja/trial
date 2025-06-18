This example uses a simplified approach with Node.js, Express.js, and an in-memory user store for demonstration.  **Do not use this code in a production environment without significant security enhancements.**  A production system requires a robust database, proper password hashing (e.g., bcrypt), and protection against various attacks.

**1. Backend (server.js):**

```javascript
const express = require('express');
const app = express();
const port = 3000;

// In-memory user store (REPLACE WITH A DATABASE IN PRODUCTION!)
const users = {
  'testuser': 'testpassword' //  NEVER store passwords like this!
};

app.use(express.json()); // for parsing application/json

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  if (users[username] === password) {
    // In a real application, generate a JWT or session token here.
    res.json({ message: 'Login successful', token: 'mock-token' }); // Mock token
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

**2. Frontend (index.html):**

```html
<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>
<style>
  body { font-family: sans-serif; }
  form { display: flex; flex-direction: column; width: 300px; margin: 0 auto; }
  label { margin-bottom: 5px; }
  input { margin-bottom: 10px; padding: 8px; }
  button { padding: 8px; background-color: #4CAF50; color: white; border: none; cursor: pointer; }
  .error { color: red; }
</style>
</head>
<body>
  <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Login</button>
    <div id="message"></div>
  </form>

  <script>
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
          const data = await response.json();
          messageDiv.textContent = data.message; // Show success message
          // Redirect to a protected page or handle the token
          console.log("Token:", data.token);
        } else {
          const errorData = await response.json();
          messageDiv.textContent = errorData.error || 'Login failed'; // Show error message
          messageDiv.classList.add('error');
        }
      } catch (error) {
        messageDiv.textContent = 'An error occurred';
        messageDiv.classList.add('error');
      }
    });
  </script>
</body>
</html>
```

To run this:

1.  Save the backend code as `server.js` and the frontend code as `index.html` in the same directory.
2.  Make sure Node.js and npm are installed.
3.  Run `npm install express` in your terminal.
4.  Run `node server.js` to start the server.
5.  Open `index.html` in your browser.


Remember: This is a **very basic example** and lacks crucial security features needed for a production environment.  Use this as a starting point and build upon it with proper authentication, authorization, and security best practices.  Consider using a dedicated authentication library or service for a production application.