export const checkAuthStatus = async () => {
    try {
        const response = await fetch("http://localhost:8080/auth/status", {
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return { authenticated: data.authenticated };
    } catch (error) {
        console.error("Error checking auth status:", error);
        return { authenticated: false };
    }
};

export const login = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/cognito";
};

export const logout = () => {
    window.location.href = "http://localhost:8080/logout";
    console.log("Logout successful");
};

export const getUserInfo = async () => {
    try {
        const response = await fetch("http://localhost:8080/auth/userinfo", {
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null;
    }
};
