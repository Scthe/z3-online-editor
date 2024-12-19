import React, { Fragment, memo, useRef } from 'react';
import { useEffect } from 'react';
import cx from 'classnames';
import { JsonInspector } from '../jsonInspector';
import classNames from 'classnames';
import { LoggedObject, LogLine, useLogs } from '../../state/logs';

interface Props {
  isAutoScroll: boolean;
}

export function OutputLogs({ isAutoScroll }: Props) {
  const lines = useLogs((s) => s.entries);
  const listElRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    // setInterval(() => {
    // console.log('adasdasdasda');
    // }, 1000);
  }, []);

  useEffect(() => {
    const el = listElRef.current;
    if (el && isAutoScroll) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [lines, isAutoScroll]);

  return (
    <ol className="h-0 px-2 pb-4 overflow-y-auto grow">
      {lines.map((line) => (
        <LogLineItem key={line.id} {...line} />
      ))}

      {/* Scroll-to-bottom target */}
      <li ref={listElRef} className="h-[0px] w-full"></li>
    </ol>
  );
}

const LogLineItem = memo(LogLineItem__);

function LogLineItem__(line: LogLine) {
  const { level, parts } = line;

  const loggedObjs = parts.filter((e) => typeof e !== 'string');

  return (
    <li
      className={cx(
        level !== 'meta' && 'mt-[1px]',
        level === 'error' && 'bg-red-900/30',
        level === 'warn' && 'bg-yellow-900/30',
        level === 'meta' && 'bg-accent-900'
      )}
    >
      <p className="text-sm break-words">
        {parts.map((e, idx) => (
          <Fragment key={idx}>
            {idx > 0 ? ' ' : null}

            {typeof e === 'string' ? (
              e
            ) : (
              <span className={e.className}>{e.name}</span>
            )}
          </Fragment>
        ))}
      </p>

      {loggedObjs.length > 0 ? <ExtraObjects values={loggedObjs} /> : null}
    </li>
  );
}

function ExtraObjects({ values }: { values: LoggedObject[] }) {
  return (
    <ol className="pl-4">
      {values.map(({ name, value, className }) => (
        <li key={name} className="flex gap-2">
          <p className={classNames('', className)}>{name}:</p>
          <div className="mt-[4px]">
            {typeof value === 'string' ? (
              value
            ) : (
              <JsonInspector value={value} />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
