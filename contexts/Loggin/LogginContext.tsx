import { createContext, useEffect, useState } from "react";

const LoginContext = createContext<ILogin>({} as ILogin);

const LoginProvider: React.FC<ILoginProvider> = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [employee, setEmployee] = useState<EmployeeCredentials>({} as EmployeeCredentials);
  const logIn = () => {
    setLogged(true);
  };
  const logOut = () => {
    setLogged(false);
  };
  const setEmployeeCredentials = (data: EmployeeCredentials) => {
    setEmployee({
      id: data.id,
      name: data.name,
      store: data.store,
    });
  };
  return (
    <LoginContext.Provider value={{ logged, logIn, logOut, employee, setEmployeeCredentials }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };
