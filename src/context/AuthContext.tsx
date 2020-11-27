import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('logado');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Thayná', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
