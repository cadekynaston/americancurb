import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path
        d="M15 0C6.71 0 0 6.709 0 15c0 8.29 6.709 15 15 15 8.29 0 15-6.709 15-15 0-8.29-6.709-15-15-15zm0 27.656c-6.995 0-12.656-5.66-12.656-12.656C2.344 8.005 8.004 2.344 15 2.344c6.995 0 12.656 5.66 12.656 12.656 0 6.995-5.66 12.656-12.656 12.656z"
        fill="#222"
      />
      <path
        d="M20.132 18.475L16.657 15l3.475-3.475a1.172 1.172 0 00-1.657-1.657L15 13.343l-3.475-3.475a1.172 1.172 0 10-1.657 1.657L13.343 15l-3.475 3.475a1.172 1.172 0 101.657 1.657L15 16.657l3.475 3.475a1.172 1.172 0 101.657-1.657z"
        fill="#222"
      />
    </svg>
  );
}

export default SvgComponent;
