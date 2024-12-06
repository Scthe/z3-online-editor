import React from 'react';
import { WithClassName } from '../utils';

interface IconProps extends WithClassName {
  size: number | string;
}

/** https://www.svgrepo.com/svg/529071/maximize-square */
export function MaximizeIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12L17 7M17 7H13.25M17 7V10.75"></path>
        <path d="M12 12L7 17M7 17H10.75M7 17V13.25"></path>
        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/529091/minimize-square-minimalistic */
export function MinimalizeIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 13.5H7.5M10.5 13.5V16.5M10.5 13.5L7 17"></path>
        <path d="M13.5 10.5H16.5M13.5 10.5V7.5M13.5 10.5L17 7"></path>
        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/529095/mirror-right */
export function MirrorIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21C16.2426 21 18.364 21 19.682 19.682C21 18.364 21 16.2426 21 12M12 3C16.2426 3 18.364 3 19.682 4.31802C20.4976 5.13363 20.8085 6.25685 20.927 8"></path>{' '}
        <path
          d="M13 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15L3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3L13 3"
          strokeDasharray="2.5 3"
        ></path>{' '}
        <path d="M12 22L12 2"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/529141/play */
export function PlayIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/528911/close-square */
export function CancelIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"></path>
        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"></path>
      </g>
    </svg>
  );
}
