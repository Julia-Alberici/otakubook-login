import * as S from "./Style";
import { Button } from "../../Components";
import { InputBox } from "../../Components";

export function Form() {
  return (
    <form>
      <S.FormWrapper>
        <InputBox children="Email:" type="email" />
        <InputBox children="Password:" type="password" />
        <Button />
      </S.FormWrapper>
    </form>
  );
}
