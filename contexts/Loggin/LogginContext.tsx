import { createContext, useEffect, useState } from "react";

const LoginContext = createContext<ILogin>({} as ILogin);

const LoginProvider: React.FC<ILoginProvider> = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const logIn = () => {
    setLogged(true);
  };
  const logOut = () => {
    setLogged(false);
  };

  return <LoginContext.Provider value={{ logged, logIn, logOut }}>{children}</LoginContext.Provider>;
};
export { LoginContext, LoginProvider };
