import logoOtakubook from "../../assets/images/otakubook.png";
import { Form } from "../../Components";
import * as S from "./Style";
export function Wrapper() {
  return (
    <S.Wrapper>
      <S.WrapperLogin>
        <S.Header>
          <img src={logoOtakubook} alt="Logo otakubook" />
        </S.Header>
        <main>
          <Form />
          <p>
            Don't have an account? <a href="http://localhost:3000/">Sign up</a>
          </p>
        </main>
      </S.WrapperLogin>
      <footer>
        <section>
          <p>From</p>
          <span>GeekEnterprise</span>
        </section>
      </footer>
    </S.Wrapper>
  );
}
