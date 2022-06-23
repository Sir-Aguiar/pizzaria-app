declare interface ILogin {
  logged: boolean;
  logIn: () => void;
  logOut: () => void;
}

declare interface ILoginProvider {
  children: JSX.Element;
}
