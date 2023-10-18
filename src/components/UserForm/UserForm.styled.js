import styled from 'styled-components';
import { Form, Field } from 'formik';


export const Box = styled.div`
background-color: #F7F6F9;
padding-top: 95px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
text-align: center;

@media (min-width: 768px) {
   padding-top: 64px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 38px;
 }
`

export const AccountForm = styled(Form)`
background-color: #fff;
border-radius: 16px;
padding-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;

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

@media (min-width: 768px) {
   gap: 24px;
 }

@media (min-width: 1440px) {
   flex-direction: row;
   flex-wrap: wrap;
   row-gap: 24px;
   column-gap: 50px;
   width: 758px;
   margin-bottom: 88px;
 }
`

export const InputFile = styled.input`
display: none;
`

export const Input = styled(Field)`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 16px;
width: 299px;

@media (min-width: 768px) {
   width: 354px;
 }

 @media (min-width: 1440px) {
   width: 346px;
 }
`

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 14px;
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
border: none;
padding: 14px 50px;
border-radius: 16px;
background: #3E85F3;
color: #FFF;

@media (min-width: 768px) {
   padding: 15px 83px;
 }

 
`