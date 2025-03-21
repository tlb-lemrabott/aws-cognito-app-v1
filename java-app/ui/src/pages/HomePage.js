import React, { useState, useEffect } from "react";
import { logout } from "../services/auth";
import { getUserInfo } from "../services/auth";
import { Navigate } from "react-router-dom";
import { format } from 'date-fns';

const HomePage = ({ isAuthenticated }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            getUserInfo().then((data) => setUser(data));
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!user) {
        return <p>Loading user info...</p>;
    }

    const authTime = user.authorities[0]?.attributes.auth_time;
    const formattedAuthTime = authTime ? format(new Date(authTime), 'MM/dd/yyyy - HH:mm:ss') : 'null';
    
    return (
        <div>
            <h1>Hello user: {user.username}!</h1>
            <p>Email: {user.authorities[0]?.attributes.email}</p>
            <p>Auth Time: {formattedAuthTime}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
