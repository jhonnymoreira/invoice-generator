import { Children } from 'react';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export interface LabeledListItemProps extends PropsWithChildren {
  label: string;
  labelProps?: ComponentPropsWithoutRef<'span'>;
  listItemProps?: ComponentPropsWithoutRef<'li'>;
}

export const LabeledListItem: FunctionComponent<
  LabeledListItemProps
> = ({ children, label, labelProps = {}, listItemProps = {} }) => {
  return (
    <li {...listItemProps}>
      <span
        className='text-indigo-900'
        {...labelProps}>
        {label}:
      </span>
      &nbsp;
      {Children.only(children)}
    </li>
  );
};
