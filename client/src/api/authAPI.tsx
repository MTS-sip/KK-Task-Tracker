import { UserLogin } from "../interfaces/UserLogin";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // fallback on open 

const login = async (userInfo: UserLogin) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  // Needed to store JWT token in localStorage
  localStorage.setItem("token", data.token);
  
  return data;
};

export { login };

