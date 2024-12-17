import React from 'react';
import { typesafeObjectKeys } from '../utils';
import * as icons from './icons';

const ICON_NAMES = typesafeObjectKeys(icons);

export function IconsPreview() {
  return (
    <div className="flex gap-2 border border-red-500">
      {ICON_NAMES.map((iconName) => {
        const Icon = icons[iconName];
        return <Icon key={iconName} size="30px" className="" />;
      })}
    </div>
  );
}
