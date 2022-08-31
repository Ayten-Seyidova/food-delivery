import {
  Bottom,
  Description,
  FooterLi,
  FooterMain,
  FooterUl,
  LeftContent,
  Logo,
  MediaLogo,
  MediaLogos,
  RightContent,
  Upper,
  UpperLeft,
  UpperRight,
} from "./Footer.styled";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <FooterMain>
        <Upper>
          <UpperLeft>
            <LeftContent>
              <Logo
                src={require(`../../../public/Image/logo/logo-white.svg`)}
                alt="logo"
              />
              <Description>
                Lorem ipsum is placeholder text commonly used in the graphic
              </Description>
              <MediaLogos>
                <MediaLogo>
                  <BsFacebook
                    style={{
                      width: "70%",
                      height: "70%",
                    }}
                  />
                </MediaLogo>
                <MediaLogo>
                  <BsInstagram style={{ width: "70%", height: "70%" }} />
                </MediaLogo>
                <MediaLogo>
                  <BsTwitter style={{ width: "70%", height: "70%" }} />
                </MediaLogo>
              </MediaLogos>
            </LeftContent>
          </UpperLeft>
          <UpperRight>
            <RightContent>
              <FooterUl>
                <FooterLi>Popular</FooterLi>
                <FooterLi>Programming</FooterLi>
                <FooterLi>Books for children</FooterLi>
                <FooterLi>Psychology</FooterLi>
                <FooterLi>Business</FooterLi>
              </FooterUl>
              <FooterUl>
                <FooterLi>Cash</FooterLi>
                <FooterLi>Delivery</FooterLi>
                <FooterLi>Payment</FooterLi>
                <FooterLi>About the store</FooterLi>
              </FooterUl>
              <FooterUl>
                <FooterLi>Help</FooterLi>
                <FooterLi>Contacts</FooterLi>
                <FooterLi>Purchase returns</FooterLi>
                <FooterLi>Buyer help</FooterLi>
              </FooterUl>
            </RightContent>
          </UpperRight>
        </Upper>
        <Bottom>
          All rights reserved © 2003-{year} Foody TERMS OF USE | Privacy Policy
        </Bottom>
      </FooterMain>
    </footer>
  );
};
