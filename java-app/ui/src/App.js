import React, { useEffect, useState } from "react";
import { checkAuthStatus } from "./services/auth";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        (async () => {
            const status = await checkAuthStatus();
            setIsAuthenticated(status.authenticated);
        })();
    }, []);

    if (isAuthenticated === null) return <p>Loading...</p>;

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/home" element={<HomePage isAuthenticated={isAuthenticated} />} />
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;