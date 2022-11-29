import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type ListProps = PropsWithChildren<
  ComponentPropsWithoutRef<'ul'>
>;

export const List: FunctionComponent<ListProps> = ({
  children,
  ...listProps
}) => {
  return (
    <ul
      className='text-sm'
      {...listProps}>
      {children}
    </ul>
  );
};
