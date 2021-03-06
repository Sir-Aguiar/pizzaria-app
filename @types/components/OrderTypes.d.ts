declare type RootOrderProps = {};
declare type MenuProps = {};
declare type OrderTutorialProps = {};
declare type FoodCardProps = {
  food: MenuItem;
  addToCart: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  cart: MenuItem[];
};
declare type ModalProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  food: MenuItem;
};
declare type OrderFirstStepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCart: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  myCart: MenuItem[];
};
declare type OrderSecondStepProps = {
  myCart: MenuItem[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
interface NextStepForm {
  form: string;
}
declare type NextStepProps = {
  onClick: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit";
  form?: NextStepForm;
  secondary?: boolean;
};
declare interface IUserData {
  client:HTMLInputElement;
  phone:HTMLInputElement;
  change:HTMLInputElement
  items:MenuItem[];
  location: {
    rua:HTMLInputElement;
    casa:HTMLInputElement;
    bairro:HTMLInputElement;
    reference:HTMLInputElement;
  }
}