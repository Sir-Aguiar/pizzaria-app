import styled from "styled-components";
interface PicSideProps {
  imageLink: string;
}
const PicSide = styled.div<PicSideProps>`
  position: relative;
  background-image: url(${(props) => props.imageLink});
  background-repeat: no-repeat;
  background-size: 100% 110%;
  background-position: right;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: 500px) {
    max-width: 40%;
  }
  ::after {
    content: "✓";
    color: #e0ffe7;
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    top: -250%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 30px;
    background-color: #22b44e98;
    transition: all 0.4s;
  }
  :hover {
    ::after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export { PicSide };
