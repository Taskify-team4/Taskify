import { TColorKey } from '@components/chips/Chip.type';

export const makeRandomChipColor = (): TColorKey => {
  const colors: TColorKey[] = ['green', 'purple', 'pink', 'orange', 'blue', 'gray'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
