import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type H2Props = PropsWithChildren<ComponentPropsWithoutRef<'h2'>>;

export const H2: FunctionComponent<H2Props> = ({
  children,
  ...h2Props
}) => {
  return (
    <h2
      className='mb-1 text-2xl font-semibold uppercase text-indigo-700'
      {...h2Props}>
      {Children.only(children)}
    </h2>
  );
};
