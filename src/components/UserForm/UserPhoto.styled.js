import styled from 'styled-components'

export const BoxCircle = styled.div`
position: relative;
width: 72px;
height: 72px;
cursor: pointer;
top: -30px;
text-align: center;

@media (min-width: 768px) {
   width: 124px;
height: 124px;
   top: 0;
   margin-bottom: 20px;
 }

 @media (min-width: 1440px) {
   margin-bottom: 14px;
 }
`

export const BoxPlus = styled.div`
position: absolute;
top: 60px;
left: 50px;
width: 16px;
height: 16px;

@media (min-width: 768px) {
   width: 24px;
height: 24px;
top: 110px;
left: 80px;
 }
`

export const BoxPlaceholder = styled.div`
position: absolute;
width: 72px;
height: 72px;
border-radius: 50%;
border: 2px solid #3E85F3;
background-color: #F8F8F8;
text-align: center;
display:flex;
align-items: center;
justify-content: center;

@media (min-width: 768px) {
   width: 124px;
height: 124px;
 }
`

export const Image = styled.img`
position: absolute;
width: 72px;
height: 72px;
border-radius: 50%;
border: 2px solid #3E85F3;
object-fit: cover;

@media (min-width: 768px) {
   width: 124px;
height: 124px;
 }
`