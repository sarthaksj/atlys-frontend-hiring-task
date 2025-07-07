import { createContext, useContext, useState } from "react";
import { sleep } from "../utils/functions";
import { ALLOWED_USERS } from "../utils/constants";

interface AuthContextType {
  initLogin: (credentials: {
    email: string;
    password: string;
  }) => Promise<void>;
  isAuthenticating: boolean;
  loggedIn: boolean;
  user: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const initLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticating(true);

    // Simulate delay
    await sleep(1500);

    const matchedUser = ALLOWED_USERS.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!matchedUser) {
      alert("Invalid email or password. Please try again.");
      setIsAuthenticating(false);
      return;
    }

    setUser(credentials.email);
    setLoggedIn(true);
    localStorage.setItem("isAuthenticated", "true");

    // Simulate post-auth delay
    await sleep(500);

    setIsAuthenticating(false);
  };

  const value: AuthContextType = {
    initLogin,
    isAuthenticating,
    loggedIn,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
