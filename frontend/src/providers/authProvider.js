import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    console.log("token changed");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = useMemo(() => {
    return { token, setToken };
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
