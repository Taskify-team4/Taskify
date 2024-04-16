import React from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { DataListProps } from '@components/table/Table.type';

function InviteList({ data, buttonText }: DataListProps) {
  return (
    <>
      {data.map((item) => (
        <S.TableList key={item.id}>
          <S.ListData>{item.email}</S.ListData>
          {buttonText && <Button.Delete>{buttonText}</Button.Delete>}
        </S.TableList>
      ))}
    </>
  );
}

export default InviteList;
