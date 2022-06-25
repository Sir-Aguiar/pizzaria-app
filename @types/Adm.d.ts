declare type AdmFormularyProps = {};
declare type OrdersMenuOptions = "Aprovados" | "Pendentes" | "Em entrega";
declare interface Order {
  price:number;
  phone:string;
  client:string;
  location:Locale;
  items:ClientProduct[];
  payment:string;
  status:number;
}
declare type OrderCardProps = {
  info: Order;
};
declare interface Locale {
  bairro: string;
  rua: string;
  casa: string;
  reference: string;
}
declare interface ClientProduct {
  _id: number;
  description: string;
  name: string;
  price: string;
}