import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await logout();
            navigate("/login");
        })();
    }, [navigate]);

    return <p>Logging out...</p>;
};

export default LogoutPage;