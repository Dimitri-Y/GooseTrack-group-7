import{s as n,g as _,r as c,j as e,k,l as v,a as g,m as h,u as f,n as b,O as j}from"./index-ecf365d7.js";import{t as D}from"./index-94a658bf.js";import{T as S,C,B as s,S as l,P as x,a as z}from"./react-datepicker-cssmodules-55252b36.js";const I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,F=({setDate:a,themeColor:r})=>{const o=_(),[i,d]=c.useState(new Date),p=c.forwardRef(({value:t,onClick:w},y)=>e.jsx(S,{onClick:w,ref:y,children:k(i,"dd-MM-yyyy")})),u=()=>{const t=new Date(i);t.setDate(t.getDate()-1),d(t),a(t)},m=()=>{const t=new Date(i);t.setDate(t.getDate()+1),d(t),a(t)};return c.useEffect(()=>{o(v(i))},[o,i]),e.jsxs(e.Fragment,{children:[e.jsx(D,{selected:i,onChange:t=>{a(i),d(t)},customInput:e.jsx(p,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1)}),e.jsxs(C,{themecolors:r,children:[e.jsx(s,{onClick:u,themecolors:r,style:r==="dark"?{borderRight:"solid #FFFFFF26 1px"}:{borderRight:"solid #DCE3E580 1px"},children:e.jsx(l,{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx(x,{themecolors:r,d:"M11.25 13.5L6.75 9L11.25 4.5"})})}),e.jsx(s,{themecolors:r,onClick:m,children:e.jsx(l,{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx(x,{themecolors:r,d:"M6.75 13.5L11.25 9L6.75 4.5"})})})]}),e.jsx(z,{})]})};n.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;g`
.react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
    background-color: rgb(62, 133, 243);
    font-family: Inter;
    border-radius: 16px;
    color: #000;
    border: 1px solid #aeaeae;
    z-index: 9999;
}
.react-datepicker__triangle {
    visibility: hidden;
    position: absolute;
    left: 50px;
}
.react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
    white-space: nowrap;
}
.react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
}
.react-datepicker__navigation {
    margin-top: 24px;
    color: white;
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    text-indent: -999em;
    overflow: hidden;
}
.react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
}
.react-datepicker__navigation-icon--previous {
    right: -2px;
}
.react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: 20px;
    width: 0;
}
.react-datepicker__navigation-icon--next {
    left: -2px;
}
.react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
}
.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0px;
    border-top-right-radius: 0.3rem;
}
.react-datepicker__header {
    position: relative;
    background-color: rgb(62, 133, 243);
    text-align: center;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
}
.react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
}
.react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin-bottom: -8px;
    white-space: nowrap;
}
.react-datepicker__day-name {
    margin: 0px;
    padding: 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
}
.react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0px;
    text-align: center;
}
.react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}
.react-datepicker__day-names, .react-datepicker__week {
    white-space: nowrap;
}
.react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
}
.react-datepicker__day--selected {
    background-color: white;
    color: rgb(62, 133, 243);
    font-size: 14px;
}
.react-datepicker__day--weekend {
    opacity: 0.5;
}
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
}
.react-datepicker__navigation-icon--previous:before {
    transform: rotate(225deg);
    right: -7px;
}
.react-datepicker__navigation-icon--next:before {
    transform: rotate(45deg);
    left: -7px;
}
.react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon:before {
    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
}
.react-datepicker__month-container {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
    width: 100%;
}
.react-datepicker__month-wrapper{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.react-datepicker__month-text{
    cursor: pointer;
}
`;g`
.react-datepicker {
    height: 180px;
}
`;n.button`
    width: 121px;
    color: #ffffff;
    background: #3e85f3;
    border-radius: 8px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    padding: 8px 12px;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;
`;const M=n.div`
    display: flex;
`;n.button`
    margin-left: 8px;
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;n.button`
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: none;
`;const P=()=>{const a=r=>{console.log(r)};return e.jsx(M,{children:e.jsx(F,{setDate:a})})},B=n.div`
    display: flex;
`,T=n.button`
    background-color: rgba(227, 243, 255, 1);
    width: 82px;
    height: 34px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
    padding: 8px, 26px, 8px, 26px;
    font-size: 16px;
    line-height: 18px;
    font: inter;
    font-weight: 500;
    color: rgba(62, 133, 243, 1);
`,E=n.button`
    background-color: rgba(202, 232, 255, 1);
    width: 82px;
    height: 34px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 8px, 26px, 8px, 26px;
    font-size: 16px;
    line-height: 18px;
    font: inter;
    font-weight: 500;
    color: rgba(62, 133, 243, 1);
`,O=()=>{const a=h(),r=f(b),o=r.toISOString().slice(0,10),i=r.toISOString().slice(0,7),d=()=>{a(`/calendar/month/${i}`)},p=()=>{a(`/calendar/day/${o}`)};return e.jsxs(B,{children:[e.jsx(T,{type:"button",onClick:d,children:"Month"}),e.jsx(E,{type:"button",onClick:p,children:"Day"})]})},L=()=>e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(P,{}),e.jsx(O,{})]})}),W=()=>{const a=h(),o=f(b).toISOString().slice(0,7);return c.useEffect(()=>{a(`/calendar/month/${o}`)},[]),e.jsxs("main",{children:[e.jsx(L,{}),e.jsx(j,{})]})};export{W as default};
