import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';



// export const Wrap = styled.div`
//   position: relative;
//   /* box-sizing: border-box; */
//   text-align: left;
//   padding: 28px 20px;
//   border-radius: 16px;
//   width: 295px;
//   /* background: */
//   box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

//   @media (min-width: 768px) {
//     width: 404px;
//     padding: 32px;
//   }
// `;

export const ReviewForm = styled(Form)`
  display: block;
  box-sizing: border-box;
  width: 335px;
  /* margin-top: 28px; */
  padding: 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;

  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;

  /* input {
  padding: 10px;
} */

  @media (min-width: 768px) {
    width: 468px;
    padding: 32px;
    font-size: 14px;
  line-height: 1.28;
  }
`;

export const Label = styled.label`
margin-bottom: 8px;
`
export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 20px; */
  margin-bottom: 8px;
`;

export const EditWrapper = styled.div`
  display: flex;
  gap: 8px;
 
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  /* background-color: ${props => { return props.isActive ? '#3E85F3' : '#E5EDFA'}};  */
  /* stroke:  ${props => { return props.isActive ? '#FFFFFF' : '#3E85F3'}} ;  */

  background-color: #E5EDFA;
  stroke: #3E85F3;

  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #3e85f3;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  background-color: rgba(234, 61, 101, 0.2);
  stroke: #ea3d65;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #ea3d65;
  }
`;

export const Textarea = styled(Field)`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 1.285;

  padding: 12px 14px;
  /* margin-top: 8px; */

  border: none;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  resize: none; 

  color: #343434;
  background-color: #F6F6F6;
    &:focus-visible {
    outline: none;
  } 

  @media (min-width: 768px) {
    padding: 14px 18px;
  }
`;

export const ErrMessage = styled(ErrorMessage)`

margin-bottom: 10px;
  color: #DA1414;
  max-width: 240px;
  font-size: 14px;
  font-weight: 400;

`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  
`;

export const Btn = styled.button`
  box-sizing: border-box;
  color: #fff;
  background-color: #3e85f3;
  text-transform: none;
  width: 144px; 
  height: 42px; 
  font-family: "Inter-600", sans-serif;
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  */
  //   /* transition:  */
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    width: 198px;
    height: 48px;
  }
`;

export const BtnCancel = styled.button`
  box-sizing: border-box;
  color: #2a2a2a;
  background-color: #E5EDFA;
  text-transform: none;
  width: 144px; 
  height: 42px; 
  font-family: "Inter-600", sans-serif;
  font-weight: 600;
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  */
  //   /* transition:  */
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    width: 198px;
    height: 48px;
  }
`;



// голубой - #E5EDFA
// синий -  #3E85F3

// export const InputWrapper = styled.div`
//   margin-bottom: 14px;

// `;


