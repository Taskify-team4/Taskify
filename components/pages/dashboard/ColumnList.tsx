import { useDashContext } from '@contexts/dashContext';
import React from 'react';
import Column from './Column';

function ColumnList() {
  const { columns } = useDashContext();
  console.log(columns);
  return (
    <>
      {columns.map((column) => (
        <Column column={column} key={column.id} />
      ))}
    </>
  );
}

export default ColumnList;
