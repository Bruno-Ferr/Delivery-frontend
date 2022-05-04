import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;
}

type SignInCredentials = {
  username: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user?: User;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  async function signIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post('client/authenticate', {
        username,
        password
      })

      const { token } = response.data;

      localStorage.setItem("auth_token", token);
      
      setUser({username});
      navigate('/');
      

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
