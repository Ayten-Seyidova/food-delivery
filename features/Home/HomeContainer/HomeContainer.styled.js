import styled from "styled-components";

export const HomeContainerMain = styled.div`
  width: 100%;
`;

export const HomeHeader = styled.div`
  justify-content: center;
  background-color: #f3f4f6;
  align-self: start;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 4px;
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
  display: grid;
  width: 50%;
  height: 100%;
`;

export const LeftHeaderP = styled.p`
  color: #181617;
  font-weight: 900;
  font-size: 60px;
  margin:0px
`;

export const LeftHeaderP2 = styled.p`
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 0.03em;
  color: #828282;
  margin:30px 0px
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

export const BurgerImg = styled.img`
  width: 90%;
  background-color: black;
  border-radius: 50px;
`;

export const HomeFeatures = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const FeaturesHeader = styled.h1`
  font-weight: 900;
  font-size: 40px;
  color: #181617;
  width: 394px;
  text-align: center;
`;
export const FeaturesDescription = styled.p`
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #828282;
  width: 780px;
  height: 105px;
`;
export const FeaturesCards = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  width: 100%;
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
`;

export const FeaturesCardDescription = styled.p`
  width: 273px;
  height: 105px;
  font-weight: 400;
  font-size: 18px;
  color: #828282;
  text-align: center;
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
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuHeader = styled.h1`
  width: 653px;
  height: 155px;
  font-weight: 900;
  font-size: 50px;
  color: #181617;
`;

export const MenuContent = styled.p`
  width: 499px;
  height: 210px;
  font-weight: 400;
  font-size: 22px;
  color: #828282;
`;

export const MenuImgBack = styled.div`
  width: 421.31px;
  height: 556.74px;
  background: #d63626;
  border-radius: 50px;
  transform: rotate(22.82deg);
`;

export const MenuImg = styled.img`
  position: absolute;
  width: 636.81px;
  height: 441.15px;
`;

export const ExploreNowContainer = styled.div`
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  margin-bottom: -80px;
`;

export const ExploreNow = styled.div`
  width: 1066px;
  height: 372px;
  background: #272727;
  border-radius: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  justify-content: space-evenly;
`;

export const ExploreImg = styled.img`
  width: 200px;
  height: 200px;
  transform: rotate(-0.64deg);
`;

export const ExploreContent = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

export const ExploreHeader = styled.h1`
  width: 500px;
  height: 120px;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0.03em;
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
`;
