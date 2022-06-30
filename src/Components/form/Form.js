import * as S from "./Style";
import { Button } from "../../Components";
import { InputBox } from "../../Components";

export function Form() {
  return (
    <form>
      <S.FormWrapper>
        <InputBox Children="Email:" type="email" />
        <InputBox Children="Password:" type="password" />
        <Button />
      </S.FormWrapper>
    </form>
  );
}
