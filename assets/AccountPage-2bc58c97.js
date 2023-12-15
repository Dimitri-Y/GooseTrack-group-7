import{s,r as l,j as t,R as m,a as U,c as D,b as L,d as k,e as M,u as R,f as T,g as q,h as A,i as W}from"./index-0b508e9a.js";import{p as H,t as V}from"./index-b30201ab.js";const Z=s.div`
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
`,G=s.div`
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
`,Y=s.div`
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
`,J=s.img`
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
`,K=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:"none",...e},l.createElement("path",{fill:"#3E85F3",fillOpacity:.18,d:"M43.297 39.75c-2.855-4.937-7.256-8.477-12.392-10.155a13.5 13.5 0 1 0-13.81 0c-5.136 1.676-9.537 5.216-12.393 10.155a1.5 1.5 0 1 0 2.597 1.5c3.533-6.105 9.776-9.75 16.7-9.75 6.925 0 13.169 3.645 16.701 9.75a1.502 1.502 0 0 0 2.515.19 1.5 1.5 0 0 0 .082-1.69ZM13.5 18A10.5 10.5 0 1 1 24 28.5 10.511 10.511 0 0 1 13.5 18Z"})),Q=e=>l.createElement("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("circle",{cx:7,cy:7,r:7,fill:"#3E85F3"}),l.createElement("path",{d:"M7 4.66669V9.33336",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.66699 7H9.33366",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})),X=({selectedImage:e,onClick:i})=>t.jsx(t.Fragment,{children:t.jsxs(Z,{onClick:i,children:[e?t.jsx(J,{alt:"",src:e}):t.jsx(Y,{children:t.jsx(K,{})}),t.jsx(G,{children:t.jsx(Q,{})})]})});var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=m.createContext&&m.createContext(C),h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(e){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e[d]=i[d])}return e},h.apply(this,arguments)},ee=globalThis&&globalThis.__rest||function(e,i){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(e);d<o.length;d++)i.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(e,o[d])&&(n[o[d]]=e[o[d]]);return n};function z(e){return e&&e.map(function(i,n){return m.createElement(i.tag,h({key:n},i.attr),z(i.child))})}function te(e){return function(i){return m.createElement(re,h({attr:h({},e.attr)},i),z(e.child))}}function re(e){var i=function(n){var o=e.attr,d=e.size,f=e.title,a=ee(e,["attr","size","title"]),w=d||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),m.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,a,{className:c,style:h(h({color:e.color||n.color},n.style),e.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),f&&m.createElement("title",null,f),e.children)};return E!==void 0?m.createElement(E.Consumer,null,function(n){return i(n)}):i(C)}function ae(e){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]})(e)}const ie=s.form`
background-color: #fff;
border-radius: 16px;
padding-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 18px;
padding-right: 18px;
text-align: center;
background-color: ${e=>e.theme.secondaryBgColor};


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
`,ne=s.h1`
font-family: 'Inter-Bold', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 18px;
margin-bottom: 4px;
color: ${e=>e.theme.secondaryTextColor};


@media (min-width: 768px) {
   font-size: 18px;
margin-bottom: 8px;
 }
`,oe=s.p`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 18px;
color: ${e=>e.theme.colorHeaderCalendar};

margin-bottom: 40px;


@media (min-width: 768px) {
   font-size: 14px;
 }

 @media (min-width: 1440px) {
   margin-bottom: 44px;
 }
`,de=s.div`
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
`,se=s.input`
display: none;
`,g=s.input`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 18px;
width: 299px;
border-radius: 8px;
border: 1px solid ${e=>e.theme.borderInputForm};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
background-color: ${e=>e.theme.secondaryBgColor};
color: ${e=>e.theme.mainTextColor};

${e=>e.hasError&&`
      border: 2px solid red; 
    `}

@media (min-width: 768px) {
   width: 354px;
 }

 @media (min-width: 1440px) {
   width: 354px;
 }
`;g.shouldForwardProp=e=>e!=="hasError";const u=s.label`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 14px;
font-weight: 400;
line-height: 18px;
gap: 8px;
color: ${e=>e.theme.labelsColor};


${e=>e.hasError&&`
      color: red; 
    `}

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
`;u.shouldForwardProp=e=>e!=="hasError";const le=s.button`
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

 &:disabled {
    background-color: rgba(62, 133, 243, 0.5);
 }
 
`,pe=U`
.react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 18px;
    background-color: rgb(62, 133, 243);
    font-family: Inter;
    border-radius: 16px;
    color: #000;
    border: 1px solid #aeaeae;

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

.react-datepicker__input-container {
    position: relative;
    
  }

.react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    top: 17px;
    left: 275px;

    @media (min-width: 768px) {
        left: 325px;
      }
     
      @media (min-width: 1440px) {
        left: 325px;
      }

  }

.react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
        font-size: 24px;
      }
     
     @media (min-width: 1440px) {
        font-size: 24px;
      }
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

    @media (min-width: 768px) {
        font-size: 18px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
      }
}
.react-datepicker__month {
    display: flex;
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

    @media (min-width: 768px) {
        font-size: 18px;
        width: 48px;
    height: 48px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
        width: 48px;
    height: 48px;
      }
}
.react-datepicker__day--selected {
    background-color: white;
    color: rgb(62, 133, 243);
    font-size: 14px;
    border-radius: 24px;

    @media (min-width: 768px) {
        font-size: 18px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
      }
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

    .react-datepicker__calendar-icon {
        position: absolute;
        left: 100px;
    }
}
`,ce=D().shape({avatar:L().test("fileType",e=>e?["image/jpg","image/jpeg","image/png","image/webp"].includes(e.type):!0),name:k().required("Name is required").max(16),email:k().email("Please enter a valid email").required("Email is required"),birthday:M(),number:k().matches(/^\+380\d{9}$/,"The number should start with +380 and 9 number",{excludeEmptyString:!0}),skype:k().max(16,"It must be no more than 16 characters")}),he=()=>{const[e,i]=l.useState(null),[n,o]=l.useState(),[d,f]=l.useState(!1),a=R(T),w=q(),c=l.useRef(null),y=p=>p.toString().padStart(2,"0"),j=async p=>{p.preventDefault();const{name:b,number:_,birthday:v,skype:$,email:O}=r.values,P=y(v.getMonth()+1),B=y(v.getDate()),N=`${v.getFullYear()}-${P}-${B}`,x=new FormData;x.append("avatarURL",n),x.append("userName",b),x.append("phone",_),x.append("birthday",N),x.append("skype",$),x.append("email",O),w(W(x)),f(!1)},r=A({initialValues:{name:(a==null?void 0:a.userName)||"",number:(a==null?void 0:a.phone)||"",birthday:a!=null&&a.birthday?H(a.birthday):new Date,skype:(a==null?void 0:a.skype)||"",email:(a==null?void 0:a.email)||""},onSubmit:j,validationSchema:ce});l.useEffect(()=>{a&&i(a.avatarURL)},[a]);const F=()=>{const p=y(r.values.birthday.getMonth()+1),b=y(r.values.birthday.getDate()),_=`${r.values.birthday.getFullYear()}-${p}-${b}`;return a.userName===r.values.name&&a.phone===r.values.number&&a.birthday===_&&a.skype===r.values.skype&&a.email===r.values.email},S=()=>{c.current.click()},I=p=>{o(p.target.files[0]);const b=URL.createObjectURL(p.target.files[0]);i(b),f(!0)};return t.jsx(t.Fragment,{children:t.jsxs(ie,{onSubmit:j,children:[t.jsx(X,{onClick:S,selectedImage:e}),t.jsx(se,{type:"file",name:"avatar",onChange:I,ref:c,accept:"image/*,.png,.ipg,.jpeg,.webp"}),t.jsx(ne,{children:a.userName||"User Name"}),t.jsx(oe,{children:"User"}),t.jsxs(de,{children:[t.jsxs(u,{hasError:r.errors.name,children:["User Name",t.jsx(g,{type:"text",name:"name",maxLength:"16",onChange:r.handleChange,value:r.values.name,hasError:r.errors.name}),r.errors.name&&t.jsx("div",{children:r.errors.name})]}),t.jsxs(u,{hasError:r.errors.number,children:["Phone",t.jsx(g,{type:"tel",name:"number",onChange:r.handleChange,value:r.values.number,hasError:r.errors.number}),r.errors.number&&t.jsx("div",{children:r.errors.number})]}),t.jsxs(u,{children:["Birthday",t.jsx(V,{showIcon:!0,selected:r.values.birthday,onChange:p=>{r.setFieldValue("birthday",p)},default:new Date,icon:t.jsx(ae,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,customInput:t.jsx(g,{}),maxDate:new Date}),t.jsx(pe,{})]}),t.jsxs(u,{hasError:r.errors.skype,children:["Skype",t.jsx(g,{type:"text",name:"skype",onChange:r.handleChange,value:r.values.skype,hasError:r.errors.skype}),r.errors.skype&&t.jsx("div",{children:r.errors.skype})]}),t.jsxs(u,{hasError:r.errors.email,children:["Email",t.jsx(g,{type:"email",name:"email",onChange:r.handleChange,value:r.values.email,hasError:r.errors.email}),r.errors.email&&t.jsx("div",{children:r.errors.email})]})]}),t.jsx(le,{type:"submit",disabled:F()&&!d,children:"Save Changes"})]})})},ge=()=>t.jsx(t.Fragment,{children:t.jsx(he,{})});export{ge as default};
