import React, { useEffect } from "react";
import { login } from "../services/auth";

const LoginPage = () => {
    useEffect(() => {
        login();
    }, []);

    return <p>Redirecting to login...</p>;
};

export default LoginPage;
