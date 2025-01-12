import React, {memo} from 'react';
import {tableTypes} from '../../data';
import {TableWrapper, TableImage, TableTitle} from './Table.styles';
import {TABLE_IMAGES} from '../../constants';

const resolveTableImage = (type) => TABLE_IMAGES[type] || null;

const Table = ({table}) => {
  const tableImage = resolveTableImage(table.type);
  
  return (
    <TableWrapper warning={table.warning}>
      {tableImage && <TableImage src={tableImage} alt={table.type} />}
      <TableTitle>{table.name}</TableTitle>
      <p>{tableTypes[table.type].title}</p>
      <p>
        Guests: {table.guests} / {table.maxGuests}
      </p>
    </TableWrapper>
  );
};

export default memo(Table);
