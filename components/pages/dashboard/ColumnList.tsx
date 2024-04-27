import { useDashContext } from '@contexts/dashContext';
import React, { useEffect, useState } from 'react';
import Column from './Column';
import { getCards } from '@utils/api';

function ColumnList() {
  const { columns, selectedColumn } = useDashContext();
  const [cards, setCards] = useState({});

  const fetchAllCards = async () => {
    const cardsData = {};
    for (const column of columns) {
      const cards = await getCards(column.id);
      cardsData[column.id] = cards;
    }
    console.log(cardsData);
    setCards(cardsData);
  };
  useEffect(() => {
    fetchAllCards();
  }, []);

  return (
    <>
      {columns?.map((column) => (
        <Column
          column={column}
          key={column.id}
          selectedColumnId={selectedColumn?.id}
          cards={cards[column.id]}
          setCards={setCards}
          fetchAllCards={fetchAllCards}
        />
      ))}
    </>
  );
}

export default ColumnList;
