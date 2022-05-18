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
declare type NextStepProps = {
  onClick: () => void;
  isDisabled?: boolean;
};
