declare type AdmFormularyProps = {};
declare type OrdersMenuOptions = "Aprovados" | "Pendentes" | "Em entrega";
declare interface Order {
  price: number;
  phone: string;
  client: string;
  location: Locale;
  items: ClientProduct[];
  payment: string;
  status: number;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}
declare type OrderCardProps = {
  info: Order;
};
declare interface Locale {
  bairro: string;
  address: string;
  casa: string;
  reference: string;
  cep: string;
}
declare interface ClientProduct {
  _id: number;
  description: string;
  name: string;
  price: string;
}
