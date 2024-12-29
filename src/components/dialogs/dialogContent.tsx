import React from 'react';
import cx from 'classnames';
import { WithClassName } from '../../utils';
import classNames from 'classnames';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> &
  WithClassName & { small?: boolean; danger?: boolean };

export const DialogButton = ({
  className,
  children,
  disabled,
  danger,
  small,
  ...rest
}: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cx(
        `font-medium rounded-md transition-colors`,
        small ? 'px-2 py-1' : 'px-4 py-2',
        // prettier-ignore
        !disabled && !danger && `text-accent-500 hover:bg-accent-500/10`,
        // prettier-ignore
        !disabled && danger && `text-red-500 hover:bg-red-500/10`,
        // prettier-ignore
        disabled && 'cursor-not-allowed text-neutral-500',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export function DialogButtons(p: React.PropsWithChildren) {
  return <div className="flex justify-end mt-4">{p.children}</div>;
}

export function DialogParagraph(p: React.PropsWithChildren) {
  return <p className="mb-4 last-of-type:mb-0">{p.children}</p>;
}

export const Emph = ({
  children,
  sectionTitle,
}: React.PropsWithChildren & { sectionTitle?: boolean }) => (
  <span
    className={classNames(
      'text-accent-500 font-bold',
      sectionTitle && 'inline-block mr-2 uppercase'
    )}
  >
    {children}
  </span>
);

export function DialogCloseBtn(props: { onClick: () => void }) {
  const size = '20px';

  return (
    <div className="absolute top-2 right-2">
      <button
        className="p-2 transition-colors hover:text-accent-500"
        onClick={props.onClick}
        aria-label="Close the modal"
      >
        <span className="not-sr-only" aria-hidden>
          <svg
            fill="currentcolor"
            height={size}
            width={size}
            viewBox="0 0 512 512"
          >
            <polygon
              points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
