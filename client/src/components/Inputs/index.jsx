import styled from "styled-components";
import { GridRow } from "../Containers";

const Input = styled.input`
  padding: 6px 12px;
  border-radius: 6px;
  border: ${(prop) => `1px solid ${!prop.error ? '#C4C4C4' : '#ff5252'}` };
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 6px 12px;
  border-radius: 6px;
  border: ${(prop) => `1px solid ${!prop.error ? '#C4C4C4' : '#ff5252'}` };
  font-size: 1rem;
`;

export const PseudoInputBox = styled(GridRow)`
  padding: 6px;
  border-radius: 6px;
  border: ${(prop) => `1px solid ${!prop.error ? '#C4C4C4' : '#ff5252'}` };
  font-size: 1rem;
`

export const Label = styled.h4`
  margin: 0;
  margin-bottom: 6px;
`

export default Input;