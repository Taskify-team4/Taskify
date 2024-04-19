import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { DataListProps } from '@components/table/Table.type';
import Image from 'next/image';
import ProfileIcon from '@components/profileIcon/ProfileIcon';

function MemberList({ data, buttonText, onDeleteClick }: DataListProps) {
  return (
    <>
      {data.map((item) => (
        <S.TableList key={item.id}>
          <S.MemberDataContainer>
            {item.profileImageUrl ? (
              <S.MemberProfile>
                <Image src={item.profileImageUrl} fill alt="유저 이미지" />
              </S.MemberProfile>
            ) : (
              <ProfileIcon str={item.nickname[0]} />
            )}
            <S.ListData>{item.nickname}</S.ListData>
          </S.MemberDataContainer>
          {!item.isOwner ? <Button.Delete onClick={() => onDeleteClick(item.id)}>{buttonText}</Button.Delete> : <></>}
        </S.TableList>
      ))}
    </>
  );
}

export default MemberList;
