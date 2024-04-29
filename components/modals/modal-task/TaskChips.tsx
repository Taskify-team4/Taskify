import * as S from '@components/modals/modal-task/ModalTask.style';
import Chip from '@components/chips/Chip';
import { ColorTile } from '@components/chips/Chip.style';

type TaskChipsProps = {
  tags: string[];
  columntitle: string;
};

function TaskChips({ tags, columntitle }: TaskChipsProps) {
  return (
    <S.Chips>
      <Chip.Round size={'large'} color={'purple'}>
        <S.CardColumnTitleWrapper>
          <ColorTile $size={'tiny'} $color={'purple'} />
          <span>{columntitle}</span>
        </S.CardColumnTitleWrapper>
      </Chip.Round>
      <S.ChipStroke />
      <S.ColorChips>
        {tags.map((tagString, index) => {
          const [text, color] = tagString.split(':');
          return (
            <Chip.Square key={`${index} ${text}`} size={'small'} color={color}>
              {text}
            </Chip.Square>
          );
        })}
      </S.ColorChips>
    </S.Chips>
  );
}

export default TaskChips;
