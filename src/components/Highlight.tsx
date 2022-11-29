import { Children } from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';

export type HighlightProps = PropsWithChildren;

export const Highlight: FunctionComponent<HighlightProps> = ({
  children,
}) => {
  return (
    <span className='font-semibold text-indigo-900'>
      {Children.only(children)}
    </span>
  );
};
