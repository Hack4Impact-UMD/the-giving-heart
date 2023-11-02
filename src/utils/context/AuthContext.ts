import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  user: any | undefined;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<any | undefined>>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  isLoading: false,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);