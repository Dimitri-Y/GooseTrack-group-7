import styled from 'styled-components';

export const FormTask = styled.div`
  display: block;
  padding: 18px;
  margin: 0;

  /* box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px; */

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 0cm;
    padding-bottom: 15px;
    font-weight: 600;
    margin: 0;
    background-color: transparent;
  }
  .label {
    display: flex;
    flex-direction: column;
    /* gap: 2px; */
    /* width: 100%; */
    padding-bottom: 15px;
    font-weight: 600;
  }
  .title {
    color: rgba(52, 52, 52, 0.8);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.17;
    margin-bottom: 8px;
  }
  .field {
    border: 0;
    /* width: 100%; */
    border-radius: 8px;
    background: #f6f6f6;
    padding: 12px 14px;

    ::placeholder {
      color: #343434;

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
  }

  .setTimeWrapper {
    width: 267px;
    display: flex;
    gap: 15px;
    justify-content: space-between;

    .field {
      width: 99px;
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
  .radio_tittle {
    color: #343434;

    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; /* 116.667% */
  }
  .radioBtn_Wrapper {
    display: flex;
    gap: 16px;
    
  .custom-radio{
    display: flex;
    gap: 4px;
    align-items: center
  }

  .custom-radio>input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .custom-radio>.input_first{
      background: #72C2F8
    }
    
    /* для элемента label связанного с label_input */
    .custom-radio>span {
      display: inline-flex;
      align-items: center;
      user-select: none;
      color: #343434;

font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
        }

    /* создание в label псевдоэлемента  before со следующими стилями */
    .custom-radio>span::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #b3d7ff;
      border-radius: 50%;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;

      
    }

    /* при наведенні курсора на радіо */
    .custom-radio>input:not(:disabled):not(:checked)+span:hover::before {
      border-color: #b3d7ff;
    }

    /* стили для активной радиокнопки (при нажатии на неё) */
    .custom-radio>input:not(:disabled):active+span::before {
      background-color: red;
      border-color: #b3d7ff;
    }

    /* стили для радиокнопки, находящейся в фокусе */
    .custom-radio>input:focus+span::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
    .custom-radio>input:focus:not(:checked)+span::before {
      border-color: #80bdff;
    }

    /* стили для радиокнопки, находящейся в состоянии checked */
    .custom-radio>input:checked+span::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

    /* стили для радиокнопки, находящейся в состоянии disabled */
    .custom-radio>input:disabled+span::before {
      background-color: #e9ecef;
    }
  }

`;
// export const styleForm = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   gap: 2px;
//   padding-bottom: 15px;
//   font-weight: 600; */
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
//   padding-bottom: 15px;
//   font-weight: 600;
// `;

export const Button = styled.button`
  display: block;

  padding: 10px;
  border: none;

  color: #fff;

  background-color: #7e57c2;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  cursor: pointer;
`;
