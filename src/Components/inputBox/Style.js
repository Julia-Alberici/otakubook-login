import styled from "styled-components";
export const Label = styled.label`
  color: #595959;
  display: block;
  text-align: left;
`;

export const InputWrapper = styled.div`
  width: 80%;
  margin: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 2px;
  border: 1px solid #989797;
  padding-left: 5px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #5effff;
    outline: transparent;
  }
`;
