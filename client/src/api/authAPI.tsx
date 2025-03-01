import { UserLogin } from "../interfaces/UserLogin";


// review line, set up in render, convert to or?
const API_URL = import.meta.env.VITE_API_URL; 

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

  // Must store JWT token in localStorage
  localStorage.setItem("token", data.token);
  
  return data;
};

export { login };

