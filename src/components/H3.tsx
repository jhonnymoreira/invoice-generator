import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type H3Props = PropsWithChildren<ComponentPropsWithoutRef<'h3'>>;

export const H3: FunctionComponent<H3Props> = ({
  children,
  ...h3Props
}) => {
  return (
    <h3
      className='text-md font-semibold uppercase text-indigo-900'
      {...h3Props}>
      {Children.only(children)}
    </h3>
  );
};
