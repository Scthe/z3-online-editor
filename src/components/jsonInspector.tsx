import React from 'react';
import ReactJson from 'react-json-view';

export const TEST_JSON_OBJECT = {
  string: 'this is a test string',
  integer: 42,
  array: [1, 2, 3, 'test', null],
  float: 3.14159,
  object: {
    'first-child': true,
    'second-child': false,
    'last-child': null,
  },
  string_number: '1234',
  date: '2024-10-22T15:51:09.136Z',
};

const STYLE: React.CSSProperties = {
  // padding: '1em',
  // borderRadius: '1em',
  backgroundColor: 'transparent',
};

interface Props {
  value: object;
}

/** https://www.npmjs.com/package/react-json-view */
export function JsonInspector({ value }: Props) {
  return (
    <ReactJson
      src={value}
      collapseStringsAfterLength={15}
      displayDataTypes={false}
      displayObjectSize={false}
      enableClipboard={true}
      iconStyle="square"
      theme="monokai"
      style={STYLE}
      collapsed
    />
  );
}
