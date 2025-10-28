import { createContext, useContext, useState, useEffect } from "react";
import { getFromStorage, setToStorage, removeFromStorage } from "../utils/storage.js";
import { validateAuthForm } from "../utils/validation.js";
import { DEMO_CREDENTIALS, STORAGE_KEYS } from "../utils/constants.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load session from localStorage on mount
  useEffect(() => {
    const session = getFromStorage(STORAGE_KEYS.SESSION);
    if (session) setUser(session);
  }, []);

  const login = (email, password) => {
    const validation = validateAuthForm(email, password);
    if (!validation.isValid) {
      return { success: false, message: Object.values(validation.errors)[0] };
    }

    // mock credentials
    if (email === DEMO_CREDENTIALS.EMAIL && password === DEMO_CREDENTIALS.PASSWORD) {
      const userData = { email, token: "fake_token_123" };
      setToStorage(STORAGE_KEYS.SESSION, userData);
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const register = (email, password) => {
    const validation = validateAuthForm(email, password);
    if (!validation.isValid) {
      return { success: false, message: Object.values(validation.errors)[0] };
    }

    // mock signup (you could save to localStorage too)
    const userData = { email, token: "fake_token_123" };
    setToStorage(STORAGE_KEYS.SESSION, userData);
    setUser(userData);
    return { success: true };
  };

  const logout = () => {
    removeFromStorage(STORAGE_KEYS.SESSION);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
