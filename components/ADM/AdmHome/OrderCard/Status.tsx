import styled from "styled-components";
type StatusProps = {
  status: number;
};
export const Status = styled.div<StatusProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${(props) => (props.status == 1 ? "#E02D2D" : props.status == 0 ? "#33D169" : "#EC9D26")};
  margin-left: auto;
  grid-auto-columns: auto;
  cursor: pointer;
`;
