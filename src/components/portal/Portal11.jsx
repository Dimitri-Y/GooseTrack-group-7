// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';

// // type containerOptions = {
// //   id: string;
// //   mountNode?: HTMLElement;
// // };
// const createContainer = ({ id, mountNode }) => {
//   if (document.getElementById(id)) {
//     return;
//   }

//   //   const { id, mountNode = document.body } = options;

//   const portalContainer = document.createElement('div');
//   portalContainer.setAttribute('id', id);
//   portalContainer.setAttribute('data-testid', `portalContainer-${id}`);
//   mountNode.appendChild(portalContainer);
// };

// const PORTAL_ERROR_MSG = `There is no portal container in markup. Please add portal container with proper id attribute.`;
// // type PortalProps = {
// //   id: string;
// //   children: React.ReactNode;
// // };
// const Portal = ({ id, children }) => {
//   //   const { id, children } = props;
//   const [container, setContainer] = useState < HTMLElement > 'div';

//   useEffect(() => {
//     if (id) {
//       const portalContainer = document.getElementById(id);

//       if (!portalContainer) {
//         throw new Error(PORTAL_ERROR_MSG);
//       }

//       setContainer(portalContainer);
//     }
//   }, [id, setContainer]);

//   return container ? createPortal(children, container) : null;
// };

// export { createContainer, PORTAL_ERROR_MSG };
// export default Portal;

import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({el, children}) => {
  el = document.createElement('div');

  useEffect((el) =>document.body.appendChild(el))
 useEffect((el) => document.body.removeChild(el))

//   componentWillUnmount = (el) => {
//     document.body.removeChild(el);
//   };

//   const { children } = props;

  return ReactDOM.createPortal(children, el);
};

export default Portal;
