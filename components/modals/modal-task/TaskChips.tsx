import * as S from '@components/modals/modal-task/ModalTask.style';
import Chip from '@components/chips/Chip';
import { ColorTile } from '@components/chips/Chip.style';
import { ModalTaskProps } from './ModalTask';

type TaskChipsProps = Pick<ModalTaskProps, 'tags'>;
function TaskChips({ tags }: TaskChipsProps) {
  return (
    <S.Chips>
      <Chip.Round size={'large'} color={'purple'}>
        <ColorTile $size={'tiny'} $color={'purple'} /> On Progress
      </Chip.Round>
      <S.ChipStroke />
      <S.ColorChips>
        {tags.map((tag, index) => (
          <Chip.Square key={`${index} ${tag.text}`} size={'small'} color={tag.color}>
            {tag.text}
          </Chip.Square>
        ))}
      </S.ColorChips>
    </S.Chips>
  );
}

export default TaskChips;
