import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.75 16.224H1.25a1.25 1.25 0 010-2.5h27.5a1.25 1.25 0 010 2.5zM28.75 6.64H1.25a1.25 1.25 0 010-2.5h27.5a1.25 1.25 0 010 2.5zM28.75 25.807H1.25a1.25 1.25 0 010-2.5h27.5a1.25 1.25 0 010 2.5z"
        fill="#222"
      />
    </svg>
  );
}

export default SvgComponent;
