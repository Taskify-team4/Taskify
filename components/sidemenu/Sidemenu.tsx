import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';
import crownImg from '@public/icons/crown.svg';

// 임시로 만듦.
type dashboard = {
  color: string;
  title: string;
  crown?: boolean;
};

type SidemenuProps = {
  dashboards: dashboard[];
};
export default function Sidemenu({ dashboards }: SidemenuProps) {
  return (
    <S.SidemenuContainer>
      <S.logoWrapper>
        <S.logoImg src={logoImg} alt="logo" />
        <S.logoImgTaskify src={logoImgTaskify} alt="logo Taskify" />
      </S.logoWrapper>
      <S.dashBoardsWrapper>
        <S.dashBoardsText>Dash Boards</S.dashBoardsText>
        <S.addBoxImg src={addBoxImg} alt="add box" />
      </S.dashBoardsWrapper>
      <S.dashBoardsChips>
        {dashboards &&
          dashboards.map((dashboard, index) => (
            <S.dashBoardsChip key={`${index} ${dashboard.title}`}>
              <S.TempChip></S.TempChip>
              <span id="title">{dashboard.title}</span>
              {dashboard.crown && (
                <S.dashBoardCrown
                  src={crownImg}
                  alt="본인이 만든 대시보드일 때 생기는 왕관 아이콘"
                />
              )}
            </S.dashBoardsChip>
          ))}
      </S.dashBoardsChips>
    </S.SidemenuContainer>
  );
}
