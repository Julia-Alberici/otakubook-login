import * as S from "./Style";
export function InputBox(props) {
  const { Children, type } = props;

  return (
    <S.InputWrapper>
      <S.Label>{Children}</S.Label>
      <S.Input type={type} />
    </S.InputWrapper>
  );
}
