import styled from "styled-components";

export const FooterMain = styled.div`
  height: 385px;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #181617;
`;

export const Upper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 90%;
`;

export const Bottom = styled.div`
  color: #ffffff;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  height: 10%;
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    padding-bottom: 70px;
  }
`;

export const UpperLeft = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

export const UpperRight = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 92px;
  height: 32px;
  color: red;
`;

export const LeftContent = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
    padding: 70px 50px;
  }
`;

export const Description = styled.p`
  color: #828282;
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 0.03em;
`;

export const MediaLogos = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 170px;
`;

export const MediaLogo = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #fb9300;
`;

export const RightContent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export const FooterUl = styled.ul`
  list-style: none;
`;

export const FooterLi = styled.li`
  color: #ffffff;

  &:first-child {
    color: white;
    font-size: 18px;
    font-weight: 900;
  }
`;
