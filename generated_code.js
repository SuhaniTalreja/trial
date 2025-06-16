This code implements the described React homepage boilerplate with data fetching, a simplified login, and routing.  Remember to replace placeholder API endpoints and adapt the authentication to your specific needs.

**1. Project Setup:**

```bash
npx create-react-app my-homepage
cd my-homepage
npm install axios react-router-dom
```

**2. File Structure:**

```
my-homepage/
├── src/
│   ├── App.js
│   ├── AuthContext.js
│   ├── components/
│   │   ├── DataFetchingComponent.js
│   │   ├── Homepage.js
│   │   ├── LoginComponent.js
│   │   └── WelcomeMessage.js
│   └── index.js
└── ...
```

**3. Code:**

**`src/AuthContext.js`:**

```javascript
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Replace with your actual authentication logic
        // This is a placeholder, simulating a successful login
        if (email === 'test@example.com' && password === 'password') {
            setUser({ email });
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
```

**`src/components/WelcomeMessage.js`:**

```javascript
import React from 'react';

function WelcomeMessage({ user }) {
    return (
        <div>
            {user ? `Welcome, ${user.email}!` : 'Welcome, Guest!'}
        </div>
    );
}

export default WelcomeMessage;
```

**`src/components/DataFetchingComponent.js`:**

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/data'); // Replace with your API endpoint
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>;

    return (
        <div>
            {/* Display your data here */}
            {JSON.stringify(data, null, 2)} {/* Pretty-printed JSON */}
        </div>
    );
}

export default DataFetchingComponent;
```

**`src/components/LoginComponent.js`:**

```javascript
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginComponent;
```

**`src/components/Homepage.js`:**

```javascript
import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import DataFetchingComponent from './DataFetchingComponent';
import LoginComponent from './LoginComponent';
import { useAuth } from '../AuthContext';

function Homepage() {
    const { user, logout } = useAuth();

    return (
        <div>
            <WelcomeMessage user={user} />
            <DataFetchingComponent />
            {!user && <LoginComponent />}
            {user && <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default Homepage;
```

**`src/App.js`:**

```javascript
import React from 'react';
import { AuthProvider } from './AuthContext';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
```

**`src/index.js`:** (Standard React app entry point)


Remember to replace `/api/data` with your actual API endpoint.  This example uses a very simple in-memory authentication;  you'll need a robust authentication system for a production application.  Consider using Firebase, Auth0, or a custom backend solution with appropriate security measures.  This improved response provides a functional boilerplate, ready for expansion.