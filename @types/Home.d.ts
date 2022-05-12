declare interface Promotion {
  banners: {
    lg:string;
    md:string;
  }
}

declare type PromotionsProps = {
  promotions: Promotion[];
};
