import logoOtakubook from "../../assets/images/otakubook.png";
import { Form } from "../../Components";
export function Wrapper() {
  return (
    <div>
      <header>
        <img src={logoOtakubook} alt="Logo otakubook" />
      </header>
      <main>
        <Form />
        <p>
          Don't have an account? <a href="http://localhost:3000/">Sign up</a>
        </p>
      </main>
      <footer>
        <section>
          <p>From</p>
          <span>GeekEnterprise</span>
        </section>
      </footer>
    </div>
  );
}
