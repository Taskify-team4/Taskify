import { TColorKey } from '@components/chips/Chip.type';

// 임시로 만듦.
type dashboard = {
  color: TColorKey;
  title: string;
  crown?: boolean;
};
export type SidemenuProps = {
  dashboards: dashboard[];
};