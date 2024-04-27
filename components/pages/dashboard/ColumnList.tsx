import { useDashContext } from '@contexts/dashContext';
import React, { useEffect, useState } from 'react';
import Column from './Column';

function ColumnList() {
  const { columns } = useDashContext();
  const [isEdited, SetIsEdited] = useState<boolean>(true);
  const handleChangeIsEdited = () => {
    SetIsEdited(!isEdited);
    console.log(isEdited);
  };

  return (
    <>
      {columns?.map((column) => (
        <Column column={column} key={column.id} onChangeIsEdited={handleChangeIsEdited} />
      ))}
    </>
  );
}

export default ColumnList;
