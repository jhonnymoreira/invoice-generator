import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type PreProps = PropsWithChildren<
  ComponentPropsWithoutRef<'pre'>
>;

export const Pre: FunctionComponent<PreProps> = ({
  children,
  ...preProps
}) => {
  return (
    <pre
      className='flex whitespace-pre-wrap text-xs'
      {...preProps}>
      {Children.only(children)}
    </pre>
  );
};
