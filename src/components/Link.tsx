import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type LinkProps = PropsWithChildren<
  ComponentPropsWithoutRef<'a'>
>;

export const Link: FunctionComponent<LinkProps> = ({
  children,
  ...linkProps
}) => {
  return (
    <a
      className='cursor-pointer text-indigo-400 underline decoration-indigo-400 decoration-solid decoration-2 underline-offset-4'
      rel='noreferrer'
      target='_blank'
      {...linkProps}>
      {Children.only(children)}
    </a>
  );
};
