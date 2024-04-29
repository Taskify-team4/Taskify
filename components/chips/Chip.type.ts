import { ReactNode } from 'react';

export type TColorKey = 'green' | 'purple' | 'pink' | 'orange' | 'blue' | 'gray';

export type TColorCode = '#760dde' | '#e876ea' | '#ffa500' | '#76a5ea' | '#7ac555';

export type TChipSize = 'large' | 'small' | 'tiny';

export type TChipProps = {
  children: ReactNode;
  size: TChipSize;
  color: TColorKey | string;
};
