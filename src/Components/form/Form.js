import * as S from "./Style";
import { Button } from "../../Components";
import { InputBox } from "../../Components";

export function Form() {
  return (
    <form>
      <S.FormWrapper>
        <InputBox Children="Email:" />
        <InputBox Children="Password:" />
        <Button />
      </S.FormWrapper>
    </form>
  );
}
