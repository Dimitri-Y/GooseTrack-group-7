// import React from 'react';

export const SvgSelector = ({ id }) => {
  switch (id) {
    case 'xClose':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#111"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </g>
        </svg>
      );
    default:
      break;
  }
};
