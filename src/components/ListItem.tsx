import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export type ListItemProps = PropsWithChildren<
  ComponentPropsWithoutRef<'li'>
>;

export const ListItem: FunctionComponent<ListItemProps> = ({
  children,
  ...listItemProps
}) => {
  return <li {...listItemProps}>{Children.only(children)}</li>;
};
