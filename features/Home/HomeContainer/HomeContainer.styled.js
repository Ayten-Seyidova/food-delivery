import styled, { keyframes } from "styled-components";

export const HomeContainerMain = styled.div`
  width: 100%;
`;

export const HomeHeader = styled.div`
  justify-content: center;
  background-color: #f3f4f6;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeHeaderMobile = styled.div`
  justify-content: center;
  background-color: #f2f2f2;
  align-items: center;
  flex-direction: column;
  height: 475px;
  width: 100%;
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const LeftHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  width: 50%;
  height: 100%;
  padding: 50px;
`;

export const RightHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50px;
  height: 100%;
  width: 50%;
  position: relative;
`;

export const LeftHeaderP = styled.p`
  color: #181617;
  font-weight: 900;
  font-size: 60px;
  margin: 0px;
  width: 653px;
`;

export const LeftHeaderP2 = styled.p`
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 0.03em;
  color: #828282;
  margin: 30px 0px;
  width: 510px;
`;

export const Buttons = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 80%;
`;
export const RegisterButton = styled.button`
  width: 220px;
  height: 70px;
  background: #d63626;
  border-radius: 30px;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #d60900;
  }
`;

export const OrderButton = styled.button`
  width: 220px;
  height: 70px;
  background: #f2f2f2;
  border: 2px solid #828282;
  border-radius: 30px;
  font-weight: 500;
  font-size: 25px;
  color: #828282;
`;

export const BurgerBackground = styled.div`
  width: 550px;
  height: 450px;
  border-radius: 50px;
  background-color: black;
`;

export const BurgerImg = styled.img`
  width: 100%;
  border-radius: 50px;
  position: absolute;
`;

const scale = keyframes`
  from {
    transform: scale(.95);
  }
  to {
    transform: scale(1.1);
  }
`;

export const BurgerCard = styled.div`
  width: 278px;
  height: 91px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  position: absolute;
  top: -5%;
  right: 4%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 1%;
  animation: ${scale} 2.5s linear infinite alternate;
`;

export const HomeFeatures = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 70px;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const FeaturesHeader = styled.h1`
  font-weight: 900;
  font-size: 40px;
  color: #181617;
  width: 394px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 700;
    width: 90%;
  }
`;
export const FeaturesDescription = styled.p`
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #828282;
  width: 780px;
  height: 105px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    width: 90%;
  }
`;
export const FeaturesCards = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeaturesCard = styled.div`
  width: 327px;
  height: 386px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 310px;
    letter-spacing: 0.03em;
  }
`;

export const FeaturesCardImg = styled.img`
  width: 239px;
  height: 223px;
  border-radius: 150px;
`;

export const FeaturesCardHeader = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: #4f4f4f;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FeaturesCardDescription = styled.p`
  width: 273px;
  height: 105px;
  font-weight: 400;
  font-size: 18px;
  color: #828282;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HomeMenu = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItem = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const MenuItemReverse = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const MenuLeftReverse = styled.div`
  width: 100%;
  padding-left: 10px;
  flex-direction: column;
`;

export const MenuRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

export const MenuHeader = styled.h1`
  width: 653px;
  height: 155px;
  font-weight: 900;
  font-size: 50px;
  color: #181617;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    height: 10%;
    margin-bottom: 20px;
  }
`;

export const MenuHeaderReverse = styled.div`
  width: 100%;
  height: 155px;
  font-weight: 900;
  font-size: 50px;
  color: #181617;
  padding-left: 80px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    height: 14%;
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

export const MenuContent = styled.p`
  width: 499px;
  height: 210px;
  font-weight: 400;
  font-size: 22px;
  color: #828282;
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    height: 10%;
    margin-bottom: 20px;
  }
`;

export const MenuContentReverse = styled.div`
  width: 100%;
  height: 210px;
  font-weight: 400;
  font-size: 22px;
  color: #828282;
  padding-left: 80px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    width: 95%;
    height: 10%;
    margin-bottom: 50px;
    font-size: 16px;
  }
`;

export const MenuImgBack = styled.div`
  width: 421.31px;
  height: 556.74px;
  background: #d63626;
  border-radius: 50px;
  transform: rotate(22.82deg);
  @media only screen and (max-width: 768px) {
    width: 187.27px;
    height: 251.72px;
  }
`;

export const MenuImg = styled.img`
  position: absolute;
  width: 636.81px;
  height: 441.15px;
  @media only screen and (max-width: 768px) {
    width: 282px;
    height: 200.18px;
  }
`;

export const ExploreNowContainer = styled.div`
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  margin-bottom: -80px;
  @media screen and (max-width: 768px) {
    margin-bottom: -30px;
    margin-top: 50px;
  }
`;

export const ExploreNow = styled.div`
  width: 90%;
  height: 372px;
  background: #272727;
  border-radius: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  justify-content: space-evenly;
  padding: 0px 20px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 256px;
  }
`;

export const ExploreImg = styled.img`
  width: 200px;
  height: 200px;
  transform: rotate(-0.64deg);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ExploreContent = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 90%;
  @media screen and (max-width: 768px) {
    padding: 30px 0px;
  }
`;

export const ExploreHeader = styled.h1`
  width: 500px;
  height: 120px;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0.03em;
  @media only screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 26px;
    width: 90%;
  }
`;

export const ExploreButton = styled.button`
  width: 220px;
  height: 60px;
  background: #fb9300;
  border-radius: 30px;
  color: #ffffff;
  border: none;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.03em;
  @media screen and (max-width: 768px) {
    width: 195px;
    height: 92px;
  }
`;
