import styled from "styled-components";

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
