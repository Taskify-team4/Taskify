import React from 'react';
import * as S from '@components/table/invitedDash/SearchBar.style';
import Image from 'next/image';
import searchIcon from '@public/icons/search.svg';

function SearchBar() {
  return (
    <S.SearchBarContainer>
      <S.SearchIconWrapper>
        <Image src={searchIcon} alt="돋보기 아이콘" />
      </S.SearchIconWrapper>
      <S.SearchInput type="text" placeholder="검색" />
    </S.SearchBarContainer>
  );
}

export default SearchBar;
