import styled from 'styled-components';

export const FormTask = styled.div`
  margin-top: 48px;
  display: block;
  padding: 0 18px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding: 0 28px;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: transparent;
  }
  .label {
    display: flex;
    flex-direction: column;
    /* font-family: 'Inter-500', sans-serif; */
  }
  .title {
    color: ${(p) => p.theme.taskTitleColor};
    font-family: 'Inter-500', sans-serif;
    font-size: 12px;
    font-style: normal;
    line-height: 1.17;
    margin-bottom: 8px;
  }
  .field {
    box-sizing: border-box;
    border: none;
    font-family: 'Inter-600', sans-serif;
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme.taskModalBorderInputColor};
    width: 267px;
    height: 46px;
    background: ${(p) => p.theme.reviewBgColor};
    padding: 12px 14px;
    color: ${(p) => p.theme.taskModalInputPlaceholderColor};
    ::placeholder {
        color: ${(p) => p.theme.taskModalInputPlaceholderColor};

        font-family: 'Inter-600', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.29; /* 128.571% */
      }
    @media screen and (min-width: 768px) {
      width: 340px;
    }
  }

  .setTimeWrapper {
    width: 256px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 28px;
    margin-top: 16px;

    @media screen and (min-width: 768px) {
      margin-top: 18px;
    }
    .field {
      /* box-sizing: border-box; */
      width: 126px;
      /* height: 46px; */
      margin: 0;
      /* color: ${(p) => p.theme.taskModalInputPlaceholderColor}; */

      @media screen and (min-width: 768px) {
        width: 163px;
      }
      ::placeholder {
        color: ${(p) => p.theme.taskModalInputPlaceholderColor};

        font-family: 'Inter-600', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.29; /* 128.571% */
      }
    }
  }
  .label_input {
    display: flex;
    gap: 4px;
    /* padding-bottom: 15px; */
    font-weight: 600;
    align-items: end;
  }
  .errorField {
    font-family: 'Inter-600', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    color: #ff0000;
  }

  .form-group {
    color: ${(p) => p.theme.taskModalInputPlaceholderColor};
    font-family: 'Inter-600', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.17;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.29;
    }
  }
  .radioBtn_Wrapper {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;

    .real-radio {
      width: 0;
      height: 0;
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    .custom-radio {
      position: relative;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      vertical-align: text-center;
      margin-right: 4px;
    }
    .radioBtn-first {
      .custom-radio {
        background: #72c2f8;
      }
      .custom-radio::before {
        border: 1.3px solid rgba(114, 194, 248, 0.5);
      }
      .real-radio:focus + .custom-radio {
        box-shadow: 0px 0px 10px #7e9bbd;
      }
    }
    .radioBtn-second {
      .custom-radio {
        background: #f3b249;
      }
      .custom-radio::before {
        border: 1.3px solid rgba(243, 178, 73, 0.5);
      }
      .real-radio:focus + .custom-radio {
        box-shadow: 0px 0px 10px #c28f3e;
      }
    }
    .radioBtn-third {
      .custom-radio {
        background: #ea3d65;
      }
      .custom-radio::before {
        border: 1.3px solid rgba(234, 61, 101, 0.5);
      }
      .real-radio:focus + .custom-radio {
        box-shadow: 0px 0px 10px #b5314f;
      }
    }

    .custom-radio::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);

      transition: 0.2s ease-in;
    }

    .real-radio:checked + .custom-radio {
      width: 8px;
      height: 8px;
    }
    .real-radio:checked + .custom-radio::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const ButtonSummit = styled.button`
  box-sizing: border-box;

  display: flex;
  width: 135px;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: #3e85f3;
  color: #fff;

  text-align: center;
  font-family: 'Inter-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;

  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 48px;
  }
`;
export const ButtonCancel = styled.button`
  box-sizing: border-box;

  display: flex;
  width: 118px;
  height: 42px;

  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: #efefef;
  display: block;

  cursor: pointer;
  color: #111;

  text-align: center;
  font-family: 'Inter-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  @media screen and (min-width: 768px) {
    width: 144px;
    height: 48px;
  }
`;
