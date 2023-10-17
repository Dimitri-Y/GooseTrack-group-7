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
  fill: #F3B249}


  /* html body
  {height: 100%;
  display: grid}

  body
    {font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #222}

  .cntr
  {margin: auto}



  .btn-radio {
    cursor: pointer;
    display: inline-block;
    float: left;
    -webkit-user-select: none;
    user-select: none;
    :not(:first-child) {
      margin-left: 20px;
    }
    @media screen and (max-width: 480px) {
      display: block;
      float: none;
      :not(:first-child) {
        margin-left: 0;
        margin-top: 15px;
      }
    }
    svg {
      fill: none;
      vertical-align: middle;
      circle {
        stroke-width: 2;
        stroke: #c8ccd4;
      }
      path {
        stroke: #008fff;
        &.inner {
          stroke-width: 6;
          stroke-dasharray: 19;
          stroke-dashoffset: 19;
        }
        &.outer {
          stroke-width: 2;
          stroke-dasharray: 57;
          stroke-dashoffset: 57;
        }
      }
    }
    input {
      display: none;
      :checked + svg path {
        transition: all 0.4s ease;
        .inner {
          stroke-dashoffset: 38;
          transition-delay: 0.3s;
        }
        &.outer {
          stroke-dashoffset: 0;
        }
      }
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
  } */
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
