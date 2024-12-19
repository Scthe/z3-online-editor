import Tooltip from 'rc-tooltip';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import React from 'react';

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

type Props = Omit<TooltipProps, 'overlay' | 'showArrow'> & {
  text: string;
  placement: TooltipPlacement;
};

export const MyTooltip = ({ children, text, ...rest }: Props) => {
  return (
    <Tooltip {...rest} overlay={<span>{text}</span>} showArrow={false}>
      {children}
    </Tooltip>
  );
};
