declare interface Card {
  title: string;
  body: string;
  image: string;
  alt: string;
}
declare type CarouselProps = {
  Card: Step[];

}