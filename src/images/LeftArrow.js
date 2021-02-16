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
      <path
        d="M0 12c0 6.617 5.383 12 12 12s12-5.383 12-12S18.616 0 12 0 0 5.383 0 12zm22.141 0c0 5.591-4.549 10.141-10.141 10.141S1.859 17.591 1.859 12C1.859 6.408 6.409 1.859 12 1.859c5.592 0 10.141 4.55 10.141 10.141z"
      />
      <path
        d="M13.283 6.692L8.635 11.34a.93.93 0 000 1.31l4.648 4.648a.929.929 0 001.31-1.31L10.606 12l3.987-3.997a.93.93 0 000-1.31.93.93 0 00-1.31 0z"
      />
    </svg>
  );
}

export default SvgComponent;
