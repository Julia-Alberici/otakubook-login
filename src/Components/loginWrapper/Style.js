import styled from "styled-components";
import BackgroundImg from "../../assets/images/background-desktop.jpg";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  text-align: center;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const WrapperLogin = styled.div`
  border: 1px solid #989797;
  margin: 30% auto;
  width: 20em;
`;

export const SectionLogin = styled.section`
  @media (min-width: 800px) {
    width: 40%;
  }
`;

export const Header = styled.header`
  margin: 30px 0;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #224deb;
`;

export const SideImageWrapper = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    height: 100vh;
    width: 60%;
    display: inline-block;
    background: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
