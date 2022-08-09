import {
  AboutLeft,
  AboutRight,
  AboutUs,
  Background,
  Card,
  CardContainer,
  CardDetail,
  CardFood,
  Content,
  Header,
} from "./AboutContainer.styled";
import burger from "../../../public/image/components/burger.svg";
import { AiFillStar } from "react-icons/ai";

const AboutContainerPage = () => {
  return (
    <>
      <AboutUs>
        <AboutLeft>
          <Header>About Us</Header>
          <Content>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </Content>
        </AboutLeft>
        <AboutRight>
          <Background></Background>
          <CardContainer>
            <Card></Card>
            <CardFood>
              <img src={burger} style={{ width: 120, height: 118 }} />
            </CardFood>
            <CardDetail>
              <h4
                style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}
              >
                Hamburger
              </h4>
              <AiFillStar style={{ fill: "#dfb300" }} />
              <AiFillStar style={{ fill: "#dfb300" }} />
              <AiFillStar style={{ fill: "#dfb300" }} />
              <AiFillStar style={{ fill: "#dfb300" }} />
              <AiFillStar style={{ fill: "#dfb300" }} />
              <h4
                style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}
              >
                $5.90
              </h4>
            </CardDetail>
          </CardContainer>
        </AboutRight>
      </AboutUs>
    </>
  );
};

export default AboutContainerPage;
