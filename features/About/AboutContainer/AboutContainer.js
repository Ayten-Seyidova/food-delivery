import {
  AboutLeft,
  AboutRight,
  AboutRightMobile,
  AboutUs,
  Background,
  Card,
  CardContainer,
  CardContainerMobile,
  CardDetail,
  CardFood,
  Content,
  Header,
} from "./AboutContainer.styled";
import burger from "../../../public/image/components/burger.svg";
import pizza from "../../../public/image/components/pizza.svg";
import soup from "../../../public/image/components/soup.svg";
import coffee from "../../../public/image/components/coffee.svg";
import { AiFillStar } from "react-icons/ai";

const AboutContainerPage = () => {
  return (
    <AboutUs>
      <AboutLeft>
        <Header>About Us</Header>
        <Content>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.
        </Content>
      </AboutLeft>
      <AboutRight>
        <Background />
        <CardContainer className="burger">
          <Card />
          <CardFood>
            <img src={burger} style={{ width: 120, height: 118 }} />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Hamburger
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $5.90
            </h4>
          </CardDetail>
        </CardContainer>
        <CardContainer
          style={{ marginTop: "-9%", marginLeft: "-20%" }}
          className="pizza"
        >
          <Card />
          <CardFood>
            <img src={pizza} style={{ width: 120, height: 118 }} />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Sousage Pizza
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $7.90
            </h4>
          </CardDetail>
        </CardContainer>
        <CardContainer
          style={{ marginTop: "10%", marginLeft: "20%" }}
          className="soup"
        >
          <Card />
          <CardFood>
            <img
              src={soup}
              style={{ width: 120, height: 118, borderRadius: "50%" }}
            />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Tomato Soup
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $7.90
            </h4>
          </CardDetail>
        </CardContainer>
        <CardContainer
          style={{ marginTop: "35%", marginLeft: "-20%" }}
          className="coffee"
        >
          <Card />
          <CardFood>
            <img src={coffee} style={{ width: 120, height: 118 }} />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Papa Coffee
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $1.40
            </h4>
          </CardDetail>
        </CardContainer>
      </AboutRight>
      <AboutRightMobile>
        <CardContainerMobile className="coffee">
          <Card />
          <CardFood>
            <img
              src={soup}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Tomato Soup
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $7.90
            </h4>
          </CardDetail>
        </CardContainerMobile>
        <CardContainerMobile className="coffee">
          <Card />
          <CardFood>
            <img
              src={burger}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </CardFood>
          <CardDetail>
            <h4 style={{ fontWeight: 600, fontSize: 22, fontFamily: "Mukta" }}>
              Hamburger
            </h4>
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <AiFillStar style={{ fill: "#dfb300" }} />
            <h4 style={{ fontWeight: 600, fontSize: 20, fontFamiliy: "Mukta" }}>
              $5.90
            </h4>
          </CardDetail>
        </CardContainerMobile>
      </AboutRightMobile>
    </AboutUs>
  );
};

export default AboutContainerPage;
