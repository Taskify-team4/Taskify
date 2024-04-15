import { ReactNode } from 'react';

export type TColorKey =
  | 'green'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'blue'
  | 'gray';

export type TChipSize = 'large' | 'small';

export type TChipProps = {
  children: ReactNode;
  size: TChipSize;
  color: TColorKey;
};
