import{s as i,g as z,k as C,u as f,l as m,m as v,r as h,j as e,n as l,o as p,a as j,p as y,N as E,O as F}from"./index-0b508e9a.js";import{t as P,s as B,a as I}from"./index-b30201ab.js";import{T as b,C as N,B as u,S as w,P as _,a as R}from"./react-datepicker-cssmodules-5469d833.js";const A=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 20px;

  @media (min-width: 375px) {
    padding-bottom: 32px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,O=({setDate:r,themeColor:n})=>{const o=z(),D=C(),g=f(m),s=v(),[H,J,x]=D.pathname.split("/"),[c,d]=h.useState(new Date(g)),S=h.forwardRef(({onClick:t},a)=>e.jsx(e.Fragment,{children:x==="month"?e.jsx(b,{onClick:t,ref:a,children:l(c,"MMMM yyyy")}):e.jsx(b,{onClick:t,ref:a,children:l(c,"dd MMM yyyy")})})),M=()=>{if(x==="month"){const t=B(c,1);d(t),r("PREV"),o(p(t.toLocaleDateString().split(".").reverse().join("-"))),s(`/calendar/month/${t.toLocaleDateString().split(".").reverse().join("-").slice(0,7)}`)}else{const t=c;t.setDate(t.getDate()-1),d(t),r(t),o(p(t.toLocaleDateString().split(".").reverse().join("-")));const a=l(t,"yyyy-MM-dd");s(`/calendar/day/${a}`)}},$=t=>{if(x==="month"){const a=I(c,1);d(a),r("NEXT",t),o(p(a.toLocaleDateString().split(".").reverse().join("-"))),s(`/calendar/month/${a.toLocaleDateString().split(".").reverse().join("-").slice(0,7)}`)}else{const a=c;a.setDate(a.getDate()+1),d(a),r(a),o(p(a.toLocaleDateString().split(".").reverse().join("-")));const L=l(a,"yyyy-MM-dd");s(`/calendar/day/${L}`)}},T=t=>{if(x==="month")d(t),r("DATE",t),o(p(t.toLocaleDateString().split(".").reverse().join("-"))),s(`/calendar/month/${t.toLocaleDateString().split(".").reverse().join("-").slice(0,7)}`);else{const a=l(t,"yyyy-MM-dd");d(t),r("DATE",t),o(p(t.toLocaleDateString().split(".").reverse().join("-"))),s(`/calendar/day/${a}`)}};return h.useEffect(()=>d(new Date(g)),[g]),e.jsxs(e.Fragment,{children:[e.jsx(P,{selected:c,onChange:T,customInput:e.jsx(S,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1)}),e.jsxs(N,{themecolors:n,children:[e.jsx(u,{onClick:M,themecolors:n,style:n==="dark"?{borderRight:"solid #FFFFFF26 1px"}:{borderRight:"solid #DCE3E580 1px"},children:e.jsx(w,{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx(_,{themecolors:n,d:"M11.25 13.5L6.75 9L11.25 4.5"})})}),e.jsx(u,{themecolors:n,onClick:$,children:e.jsx(w,{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx(_,{themecolors:n,d:"M6.75 13.5L11.25 9L6.75 4.5"})})})]}),e.jsx(R,{})]})};i.div`
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
`;j`
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
`;j`
.react-datepicker {
    height: 180px;
}
`;i.button`
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
`;const W=i.div`
    display: flex;
`;i.button`
    margin-left: 8px;
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;i.button`
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: none;
`;const G=()=>{const r=()=>{};return e.jsx(W,{children:e.jsx(O,{setDate:r})})},V=i.div`
  display: flex;
`,k=i(E)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 34px;

  font-size: 16px;
  line-height: 18px;
  font-weight: 500;

  color: ${r=>r.theme.buttonTypeSelectText};
  background-color: ${r=>r.theme.buttonTypeSelectBg};

  ${r=>{switch(r.$type){case"month":return y`
          border-right: 1px solid rgba(62, 133, 243, 0.2);
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        `;default:return y`
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        `}}}

  &.active {
    color: ${r=>r.theme.buttonTypeSelectTextActive};
    background-color: ${r=>r.theme.buttonTypeSelectBgActive};
  }
`,X=()=>{const r=f(m),n=r.slice(0,7);return e.jsxs(V,{children:[e.jsx(k,{to:`/calendar/month/${n}`,$type:"month",type:"button",children:"Month"}),e.jsx(k,{to:`/calendar/day/${r}`,$type:"day",type:"button",children:"Day"})]})},q=()=>e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsx(G,{}),e.jsx(X,{})]})}),Y=()=>{const r=v(),o=f(m).slice(0,7);return h.useEffect(()=>{r(`/calendar/month/${o}`)},[]),e.jsxs("main",{children:[e.jsx(q,{}),e.jsx(F,{})]})};export{Y as default};
