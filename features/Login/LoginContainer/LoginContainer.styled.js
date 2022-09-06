import styled from "styled-components";

export const LoginDiv = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ErrorText = styled.div`
  font-size: 13px;
  color: red;
`;

export const LoginImage = styled.div`
  background-color: #eb5757;
  flex: 5;
  padding-right: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 10;
    padding-right: 0;
  }
`;

export const LoginImg = styled.img`
  object-fit: cover;
  width: 80%;
  display: block;
  margin: auto;
  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 300px;
  }
`;

export const LogDiv = styled.div`
  flex: 5;
  @media (max-width: 768px) {
    flex: 10;
  }
  .app-bar {
    box-shadow: none;
    background-color: #fff;
    margin-top: 50px;
    padding-left: 20px;
    @media (max-width: 992px) {
      padding-left: 0;
    }
  }
  .MuiButtonBase-root {
    font-size: 30px;
    color: #828282;
    font-weight: 500;
    line-height: 24px;
    border-radius: 10px;
    @media (max-width: 992px) {
      font-size: 20px;
    }
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #eb5757;
  }
  .css-1aquho2-MuiTabs-indicator {
    background-color: transparent !important;
  }
  .css-heg063-MuiTabs-flexContainer {
    justify-content: center;
  }
  .tab-pabel {
    padding-left: 20px;
    @media (max-width: 992px) {
      padding-left: 0;
    }
    .form-item {
      margin-bottom: 25px;
      @media (max-width: 992px) {
        margin-bottom: 15px;
      }
    }
    label {
      font-weight: 500;
      color: #4f4f4f;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
      display: block;
      @media (max-width: 992px) {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
    input {
      border-radius: 5px;
      padding: 22px 24px;
      background-color: #ffe7e7 !important;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
        box-shadow: 0 0 5px 0 #eb5757;
      }
      @media (max-width: 992px) {
        padding: 12px 14px;
        font-size: 14px;
      }
    }
    button {
      margin-top: 70px;
      background-color: #eb5757;
      font-weight: 500;
      font-size: 22px;
      line-height: 24px;
      display: block;
      border: none;
      color: #fff;
      width: 100%;
      padding: 17px;
      border-radius: 5px;
      transition: 0.3s all ease-in-out;
      @media (max-width: 992px) {
        padding: 12px;
        font-size: 14px;
        margin-top: 40px;
      }
      &:hover {
        box-shadow: 0 0 5px 0 #eb5757;
      }
    }
    .eye-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
`;

// wefeqfwefe
export const LoginSection = styled.div`
  padding: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eb5757;
  padding: 35px;
  z-index: 9 !important;
  border-radius: 4px;
  @media (max-width: 992px) {
    padding: 25px;
  }
`;

export const DropdownBtn = styled.button`
  width: 41px;
  height: 41px;
  padding: 0;
  border: transparent;
  &:hover,
  &:focus,
  &:active {
    border: transparent !important;
  }
  &::after {
    border: none !important;
  }
`;

export const DropdownMenu = styled.ul`
  background-color: #eb5757;
  border: none;
  max-width: 61px !important;
  min-width: 61px !important;
  padding: 0 10px;
  margin-left: -10px !important;
  margin-top: 10px !important;
`;

export const DropdownItem = styled.li`
  div {
    background-color: #eb5757;
    border: none;
    max-width: 61px !important;
    padding: 5px 0;
    &:hover {
      background-color: #eb5757;
    }
  }
`;
