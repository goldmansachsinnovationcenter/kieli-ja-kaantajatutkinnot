import { Fab, FabProps } from '@mui/material';
import { FC } from 'react';
import { LinkProps } from 'react-router-dom';

type CustomFABProps = FabProps &
  Partial<Pick<LinkProps, 'target' | 'rel'>>;

export const CustomFAB: FC<CustomFABProps> = ({ ...props }) => {
  return <Fab {...props} aria-disabled={props.disabled} />;
};
