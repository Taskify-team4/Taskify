import { TColorKey } from '@components/chips/Chip.type';

// 임시로 만듦.
export type Dashboard = {
  color: TColorKey;
  title: string;
  createdByMe?: boolean;
};
export type SidemenuProps = {
  dashboards?: Dashboard[];
};
