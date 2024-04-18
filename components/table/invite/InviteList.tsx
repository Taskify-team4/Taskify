import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { InvitedDashListProps } from '@components/table/Table.type';

function InviteList({ data, buttonText, onCancelInviteClick }: InvitedDashListProps) {
  return (
    <>
      {data.map((item) => (
        <S.TableList key={item.id}>
          <S.ListData>{item.invitee.email}</S.ListData>
          {buttonText && <Button.Delete onClick={() => onCancelInviteClick(item.id)}>{buttonText}</Button.Delete>}
        </S.TableList>
      ))}
    </>
  );
}

export default InviteList;
