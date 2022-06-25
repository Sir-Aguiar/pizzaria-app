declare interface ILogin {
  logged: boolean;
  logIn: () => void;
  logOut: () => void;
  employee: EmployeeCredentials;
  setEmployeeCredentials: (data:EmployeeCredentials) => void;
}

declare interface ILoginProvider {
  children: JSX.Element;
}

declare interface EmployeeCredentials {
  id: string;
  name: string;
  store: string;
}
