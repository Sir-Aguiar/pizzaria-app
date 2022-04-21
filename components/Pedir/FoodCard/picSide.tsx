import styled from "styled-components";
interface PicSideProps {
  imageLink: string;
}
const PicSide = styled.div<PicSideProps>`
  background-image: url(${props => props.imageLink});
  background-repeat: no-repeat;
  background-size: 100% 110%;
  background-position: right;
  flex:1;
  overflow: hidden;
  @media (min-width: 500px) {
  background-size: 70% 110%;
  }
  
`
export {PicSide}