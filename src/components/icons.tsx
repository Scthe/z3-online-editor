import React from 'react';
import { WithClassName } from '../utils';

interface IconProps extends WithClassName {
  size: number | string;
}

/*
- https://www.svgrepo.com/collection/solar-bold-icons/6
- https://www.svgrepo.com/svg/525811/code-2
- https://www.svgrepo.com/svg/526225/sidebar-minimalistic
- https://www.svgrepo.com/svg/526323/stop
*/

/** https://www.svgrepo.com/svg/488771/arrow-down-simple */
export function ChevronDownIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 8L12 16L20 8"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/525343/flip-vertical?edit=true */
export function LayoutToggleIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor">
        <path d="M18.1136 22H5.88638C4.18423 22 3.33316 22 3.05402 21.4576C2.77488 20.9152 3.26956 20.2226 4.25891 18.8375L5.38837 17.2563C5.82827 16.6404 6.04822 16.3325 6.37127 16.1662C6.69432 16 7.07274 16 7.82957 16H16.1704C16.9273 16 17.3057 16 17.6287 16.1662C17.9518 16.3325 18.1717 16.6404 18.6116 17.2563L19.7411 18.8375C20.7304 20.2226 21.2251 20.9152 20.946 21.4576C20.6668 22 19.8158 22 18.1136 22Z"></path>
        <path d="M18.1136 2L5.88638 2C4.18423 2 3.33316 2 3.05402 2.54242C2.77488 3.08484 3.26956 3.77738 4.25891 5.16247L5.38837 6.74372C5.82827 7.35957 6.04822 7.6675 6.37127 7.83375C6.69432 8 7.07274 8 7.82957 8L16.1704 8C16.9273 8 17.3057 8 17.6287 7.83375C17.9518 7.6675 18.1717 7.35957 18.6116 6.74372L19.7411 5.16248C20.7304 3.77738 21.2251 3.08484 20.946 2.54242C20.6668 2 19.8158 2 18.1136 2Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12Z"
        ></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/526106/play?edit=true */
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
        fill="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/500512/close-bold?edit=true */
export function CancelIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024" // !
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor">
        <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
      </g>
    </svg>
  );
}
