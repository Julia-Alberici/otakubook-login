import logoOtakubook from "../../assets/images/otakubook.png";
import { Form } from "..";
import * as S from "./Style";

export function Wrapper() {
  return (
    <S.Wrapper>
      <S.SideImageWrapper></S.SideImageWrapper>
      <S.SectionLogin>
        <S.WrapperLogin>
          <S.Header>
            <img src={logoOtakubook} alt="Logo otakubook" />
          </S.Header>
          <main>
            <Form />
            <p>
              Don't have an account?{" "}
              <S.Link href="http://localhost:3000/">Sign up</S.Link>
            </p>
          </main>
        </S.WrapperLogin>
        <footer>
          <section>
            <p>From</p>
            <S.Span>GeekEnterprise</S.Span>
          </section>
        </footer>
      </S.SectionLogin>
    </S.Wrapper>
  );
}
