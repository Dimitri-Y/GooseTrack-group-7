import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AccountForm = styled(Form)`
background-color: #fff;
border-radius: 16px;
padding-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 18px;
padding-right: 18px;
text-align: center;


@media (min-width: 768px) {
   padding-top: 40px;
padding-bottom: 40px;
 }

 @media (min-width: 1440px) {
   padding-top: 60px;
padding-bottom: 60px;
padding-left: 164px;
padding-right: 165px;
 }
`

export const UserName = styled.h1`
font-family: 'Inter-Bold', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 18px;
margin-bottom: 4px;
color: #343434;

@media (min-width: 768px) {
   font-size: 18px;
margin-bottom: 8px;
 }
`

export const User = styled.p`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 18px;
color: #343434;
margin-bottom: 40px;

@media (min-width: 768px) {
   font-size: 14px;
 }

 @media (min-width: 1440px) {
   margin-bottom: 44px;
 }
`

export const InputBox = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
margin-bottom: 40px;

@media (min-width: 768px) {
   gap: 24px;
 }

@media (min-width: 1440px) {
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   row-gap: 24px;
   column-gap: 50px;
   margin-bottom: 88px;
 }
`

export const InputFile = styled.input`
display: none;
`

export const Input = styled(Field)`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 18px;
width: 299px;
border-radius: 8px;
border: 1px solid rgba(17, 17, 17, 0.15);
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;

@media (min-width: 768px) {
   width: 333px;
 }

 @media (min-width: 1440px) {
   width: 333px;
 }
`

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 14px;
font-weight: 400;
line-height: 18px;
gap: 8px;

.calendar {
   width: 299px;
}

@media (min-width: 768px) {
   .calendar {
      width: 354px;
   }
  
 }

 @media (min-width: 1440px) {
   .calendar {
      width: 354px;
   }
 }
`

export const ButtonSubmit = styled.button`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 18px;
border: none;
padding: 14px 50px;
border-radius: 16px;
background: #3E85F3;
color: #FFF;

@media (min-width: 768px) {
   padding: 15px 83px;
 }

 
`