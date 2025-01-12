import React from 'react';
import Table from '../Table/Table';
import {FixedSizeGrid} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
// import {gridStyles} from './TableGrid.styles';
// import {GridWrapper} from './TableGrid.styles';

const TableGrid = ({tables}) => {
  const cellWidth = 160;
  const cellHeight = 200;
  
  return (
    <AutoSizer disableHeight>
      {({width}) => {
        const columnCount = Math.ceil(width / cellWidth);
        const columnWidth = width / columnCount - 5;
        
        return (
          <FixedSizeGrid
            width={width}
            height={500}
            columnCount={columnCount || 5}
            rowCount={Math.ceil(tables.length / columnCount)}
            columnWidth={columnWidth}
            rowHeight={cellHeight}
          >
            {({columnIndex, rowIndex, style}) => {
              const tableIndex = rowIndex * columnCount + columnIndex;
              if (tableIndex >= tables.length) {
                return null;
              }
              
              return (
                <div style={{...style, padding: '10px'}}>
                  <Table key={tables[tableIndex].id} table={tables[tableIndex]}/>
                </div>
              );
            }}
          </FixedSizeGrid>
        )
      }}
    </AutoSizer>
  );
  
  // Option without using react-window. Option without using a window. More beautiful, not optimized for large data
  // return (
  //   <GridWrapper>
  //   {tables.map((table) => (
  //     <Table key={table.id} table={table}/>
  //   ))}
  // </GridWrapper>
  // )
};

export default TableGrid;
