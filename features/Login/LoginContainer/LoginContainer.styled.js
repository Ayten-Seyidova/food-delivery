import styled from "styled-components";

export const LoginDiv = styled.div`
    margin-top: 20px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ErrorText = styled.div`
    font-size: 13px;
    color: red;
`

export const LoginImage = styled.div`
    background-color: #EB5757;
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
`

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
`

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
        color: #EB5757;
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
            color: #4F4F4F;
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
            background-color: #FFE7E7 !important;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            border: none;
            width: 100%;
            &:focus {
                outline: none;
                box-shadow: 0 0 5px 0 #EB5757;
            }
            @media (max-width: 992px) {
                padding: 12px 14px;
                font-size: 14px;
            }
        }
        button {
            margin-top: 70px;
            background-color: #EB5757;
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            display: block;
            border: none;
            color: #fff;
            width: 100%;
            padding: 17px;
            border-radius: 5px;
            transition: .3s all ease-in-out;
            @media (max-width: 992px) {
                padding: 12px;
                font-size: 14px;
                margin-top: 40px;
            }
            &:hover {
                box-shadow: 0 0 5px 0 #EB5757;
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
`