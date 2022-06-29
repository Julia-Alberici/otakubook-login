import * as S from "./Style";
export function InputBox(props) {
  const { Children } = props;

  return (
    <S.InputWrapper>
      <S.Label>{Children}</S.Label>
      <S.Input type="text" />
    </S.InputWrapper>
  );
}
