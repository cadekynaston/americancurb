import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path d="M24 12c0-6.617-5.383-12-12-12S0 5.383 0 12s5.384 12 12 12 12-5.383 12-12zM1.859 12C1.859 6.409 6.409 1.859 12 1.859c5.592 0 10.141 4.55 10.141 10.141 0 5.592-4.549 10.141-10.141 10.141S1.859 17.591 1.859 12z" />
        <path d="M10.717 17.308l4.648-4.648a.93.93 0 000-1.31l-4.648-4.648a.929.929 0 00-1.31 1.31L13.394 12l-3.987 3.997a.929.929 0 000 1.31c.362.361.948.361 1.31 0z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="rotate(90 12 12)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
