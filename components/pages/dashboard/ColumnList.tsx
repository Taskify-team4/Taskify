import React, { useEffect, useState } from 'react';
import { useDashContext } from '@contexts/dashContext';
import Column from './Column';
import { getCards } from '@utils/api';
import { TCards } from '@components/pages/dashboard/Dashboard.type';

function ColumnList() {
  const { columns } = useDashContext();
  const [newCards, setNewCards] = useState<{ [key: number]: TCards }>({});
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const handleChangeIsEdited = () => {
    setIsEdited(!isEdited);
  };

  const fetchAllCards = async () => {
    const cardsData: { [key: number]: TCards } = {};
    for (const column of columns) {
      const cards = await getCards(column.id);
      cardsData[column.id] = cards;
    }
    setNewCards(cardsData);
  };

  useEffect(() => {
    fetchAllCards();
  }, [isEdited]);

  return (
    <>
      {columns?.map((column) => (
        <Column
          key={column.id}
          column={column}
          newCards={newCards[column.id]}
          isEdited={isEdited}
          handleChangeIsEdited={handleChangeIsEdited}
        />
      ))}
    </>
  );
}

export default ColumnList;
