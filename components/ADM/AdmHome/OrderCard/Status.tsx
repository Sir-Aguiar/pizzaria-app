import styled from "styled-components";
type StatusProps = {
  status: string;
};
export const Status = styled.div<StatusProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${(props) => props.status};
  margin-left: auto;
`;
