import styled from 'styled-components';

export const FormTask = styled.div`
  margin-top: 40px;
  display: block;
  padding: 0 18px;

  /* box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px; */

  .form {
    display: flex;
    flex-direction: column;
    /* gap: 16px; */
    margin-top: 0cm;
    /* padding-bottom: 15px; */
    /* font-weight: 600; */
    margin: 0;
    background-color: transparent;
  }
  .label {
    display: flex;
    flex-direction: column;
    font-family: 'Inter-500', sans-serif;
    font-weight: 600;
  }
  .title {
    color: rgba(52, 52, 52, 0.8);
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
    /* width: 100%; */
    border-radius: 8px;
    width: 267px;
    height: 46px;
    background: #f6f6f6;
    padding: 12px 14px;
    margin-bottom: 18px;

    ::placeholder {
      color: #343434;

      font-family: 'Inter-600', sans-serif;
      font-size: 14px;
      /* font-style: normal; */
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
  }

  .setTimeWrapper {
    width: 256px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 28px;
    .field {
      box-sizing: border-box;
      width: 126px;
      height: 46px;
      margin: 0;
    }
  }
  .label_input {
    display: flex;
    gap: 4px;
    /* width: 100%; */
    padding-bottom: 15px;
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
    color: #343434;

    font-family: 'Inter-600', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; /* 116.667% */
  }
  .radioBtn_Wrapper {
    /* position: relative; */
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
      /* background: #72c2f8; */
      border-radius: 50%;
      vertical-align: text-center;
      margin-right: 4px;
    }
    .radioBtn-first > .custom-radio {
      background: #72c2f8;

    }
    .radioBtn-second > .custom-radio {
      background: #f3b249;
    }
    .radioBtn-third > .custom-radio {
      background: #ea3d65;
    }

    .custom-radio::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      /* border: 1.3px solid rgba(114, 194, 248, 0.5); */

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);

      transition: 0.2s ease-in;

    }
    .radioBtn-first > .custom-radio::before {
      border: 1.3px solid rgba(114, 194, 248, 0.5);
    }
    .radioBtn-second > .custom-radio::before {
      border: 1.3px solid rgba(243, 178, 73, 0.5);
    }
    .radioBtn-third > .custom-radio::before {
      border: 1.3px solid rgba(234, 61, 101, 0.5);
    }
    .real-radio:checked + .custom-radio {
      width: 8px;
      height: 8px;
      
    }
    .real-radio:checked + .custom-radio::before {
      
      transform: translate(-50%, -50%) scale(1);
    }

    /* Подсветка для радиокнопке в фокусе
    .real-radio:focus + .custom-radio {
      box-shadow:
        0px 0px 0px 1px #38577a,
        0px 0px 10px #7e9bbd;
    } */
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
`;
