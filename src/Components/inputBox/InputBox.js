import * as S from "./Style";
import { string } from "prop-types";

export function InputBox(props) {
  const { children, type } = props;

  return (
    <S.InputWrapper>
      <S.Label>{children}</S.Label>
      <S.Input type={type} />
    </S.InputWrapper>
  );
}

InputBox.propTypes = {
  children: string.isRequired,
  type: string.isRequired,
};
