import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { DataListProps } from '../Table.type';

function MemberList({ data, buttonText }: DataListProps) {
  return (
    <>
      {data.map((item) => (
        <S.TableList key={item.id}>
          <S.MemberDataContainer>
            <S.MemberProfile>{item.nickname[0]}</S.MemberProfile>
            <S.ListData>{item.nickname}</S.ListData>
          </S.MemberDataContainer>
          <Button.Delete>{buttonText}</Button.Delete>
        </S.TableList>
      ))}
    </>
  );
}

export default MemberList;
