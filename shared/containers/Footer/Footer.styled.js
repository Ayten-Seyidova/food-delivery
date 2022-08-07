import styled from "styled-components";

export const FooterMain = styled.div`
  height: 385px;
  justify-content: flex-end;
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
`;

export const UpperLeft = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

export const UpperRight = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Logo = styled.img`
  width: 92px;
  height: 32px;
  color: red;
`;

export const LeftContent = styled.div`
  padding: 50px;
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
