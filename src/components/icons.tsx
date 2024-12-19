import React from 'react';
import { WithClassName } from '../utils';

interface IconProps extends WithClassName {
  size: number | string;
}

/*
- https://www.svgrepo.com/collection/solar-bold-icons/6
- https://www.svgrepo.com/svg/525811/code-2
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

/** https://www.svgrepo.com/svg/525343/flip-vertical */
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

/** https://www.svgrepo.com/svg/526106/play */
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

/** https://www.svgrepo.com/svg/500512/close-bold */
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

/** https://www.svgrepo.com/svg/526225/sidebar-minimalistic */
export function SidebarIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
        <path d="M3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.1676 21 14.25 21L14.25 3C14.1676 2.99999 14.0843 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157ZM15.75 3.00559L15.75 20.9944C18.3859 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 18.3859 3.03321 15.75 3.00559Z"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/526323/stop */
export function SquareIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
        <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/525995/list-cross-minimalistic */
export function ListClear({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697L17.5 12.4393L19.4697 10.4697C19.7626 10.1768 20.2374 10.1768 20.5303 10.4697C20.8232 10.7626 20.8232 11.2374 20.5303 11.5303L18.5607 13.5L20.5303 15.4697C20.8232 15.7626 20.8232 16.2374 20.5303 16.5303C20.2374 16.8232 19.7626 16.8232 19.4697 16.5303L17.5 14.5607L15.5303 16.5303C15.2374 16.8232 14.7626 16.8232 14.4697 16.5303C14.1768 16.2374 14.1768 15.7626 14.4697 15.4697L16.4393 13.5L14.4697 11.5303C14.1768 11.2374 14.1768 10.7626 14.4697 10.4697ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
        ></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/525472/pin-list */
export function ListPin({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="1 2 23 22"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 8.37688C22 8.78086 21.6668 9.10836 21.2557 9.10836H16.2937C15.8826 9.10836 15.5494 8.78086 15.5494 8.37688C15.5494 7.97289 15.8826 7.64539 16.2937 7.64539H21.2557C21.6668 7.64539 22 7.97289 22 8.37688Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12.7658C22 13.1698 21.6668 13.4973 21.2557 13.4973H17.2861C16.875 13.4973 16.5418 13.1698 16.5418 12.7658C16.5418 12.3618 16.875 12.0343 17.2861 12.0343H21.2557C21.6668 12.0343 22 12.3618 22 12.7658Z"
        ></path>
        <path d="M12.5872 8.23781L12.9508 8.59515C14.4693 10.0875 15.2285 10.8336 15.2278 11.6425C15.2276 11.9068 15.1728 12.1682 15.0666 12.411C14.7417 13.1542 13.7441 13.5444 11.7489 14.3248L11.6045 14.3813C11.0389 14.6025 10.7561 14.7132 10.5279 14.8908C10.3548 15.0256 10.2058 15.1878 10.0871 15.3708C9.93056 15.6119 9.84745 15.8997 9.68123 16.4753C9.42348 17.3678 9.2946 17.8141 9.01976 18.0121C8.81551 18.1593 8.56173 18.2242 8.3104 18.1934C7.97221 18.1521 7.63845 17.8241 6.97092 17.168L5.94386 16.1586L3.2706 18.7858C2.97993 19.0714 2.50867 19.0714 2.218 18.7858C1.92733 18.5001 1.92733 18.0369 2.218 17.7513L4.88125 15.1143L3.86422 14.1148C3.1967 13.4588 2.86293 13.1307 2.82084 12.7984C2.78956 12.5514 2.85556 12.302 3.00532 12.1012C3.20683 11.8311 3.66091 11.7045 4.56907 11.4511C5.15473 11.2878 5.44756 11.2061 5.69297 11.0523C5.87915 10.9356 6.0442 10.7891 6.18133 10.619C6.36209 10.3948 6.47465 10.1168 6.69977 9.56094L6.75724 9.41903C7.55132 7.45818 7.94835 6.47775 8.70458 6.15843C8.95161 6.05411 9.21763 6.00021 9.4865 6C10.3096 5.99934 11.0688 6.7455 12.5872 8.23781Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 17.1547C22 17.5587 21.6668 17.8862 21.2557 17.8862H12.3241C11.9131 17.8862 11.5798 17.5587 11.5798 17.1547C11.5798 16.7507 11.9131 16.4232 12.3241 16.4232H21.2557C21.6668 16.4232 22 16.7507 22 17.1547Z"
        ></path>
      </g>
    </svg>
  );
}

/** https://www.svgrepo.com/svg/525989/list-arrow-down-minimalistic */
export function ListScrollDown({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
    >
      <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
        ></path>{' '}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303L20.5303 15.0303C20.8232 14.7374 20.8232 14.2626 20.5303 13.9697C20.2374 13.6768 19.7626 13.6768 19.4697 13.9697L18.25 15.1893V9C18.25 8.58579 17.9142 8.25 17.5 8.25C17.0858 8.25 16.75 8.58579 16.75 9V15.1893L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L16.9697 17.5303Z"
        ></path>
      </g>
    </svg>
  );
}
