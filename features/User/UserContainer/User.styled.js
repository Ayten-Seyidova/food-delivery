import styled from "styled-components";

export const UserContainer = styled.div`
  margin: 1% 0px;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 1%;
  width: 100%;
  height: 515px;
`;

export const Options = styled.div`
  background-color: #f3f4f6;
  width: 99%;
  border-radius: 5px;
  padding: 60px;
  /* gap: 250px; */
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const UserPage = styled.div`
  width: 99%;
  background-color: #f3f4f6;
`;

export const UserProfile = styled.div`
  background-color: #f3f4f6;
  border-radius: 5px;
  width: 100%;
  height: 515px;
`;

export const Option = styled.div`
  background-color: transparent;
  border-radius: 4px;
  height: 56px;
  width: 233px;
  font-family: "Mukta";
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.03em;
  gap: 6%;
  color: #828282;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 5%;
  &:hover {
    background-color: rgba(214, 54, 38, 0.1);
    cursor: pointer;
    color: red;
  }
`;
