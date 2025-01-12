import { DEFAULT_NUM_TABLES } from './constants';

export const tableTypes = {
  DINING: { title: 'Dining Table', maxGuests: [4, 10] },
  BOOTH: { title: 'Booth Table', maxGuests: [2, 5] },
  OUTDOOR: { title: 'Outdoor Table', maxGuests: [6, 12] },
  PRIVATE: { title: 'Private Dining Table', maxGuests: [2, 6] },
};

const tableTypeKeys = Object.keys(tableTypes);

const getRandomTableTypeKey = () => {
  const randomIndex = Math.floor(Math.random() * tableTypeKeys.length);
  return tableTypeKeys[randomIndex];
};

const getRandomMaxGuests = (tableTypeKey) => {
  const [minGuests, maxGuests] = tableTypes[tableTypeKey].maxGuests;
  return Math.floor(Math.random() * (maxGuests - minGuests + 1)) + minGuests;
};

export const generateTables = (num = DEFAULT_NUM_TABLES) => {
  return Array.from({ length: num }).map((_, index) => {
    const tableTypeKey = getRandomTableTypeKey();
    const randomMaxGuests = getRandomMaxGuests(tableTypeKey);
    
    return {
      id: index + 1, // TODO: Can be replaced with UUID for unique identification if needed.
      type: tableTypeKey,
      name: `Table-${index + 1}`,
      warning: Math.random() > 0.8,
      maxGuests: randomMaxGuests,
      guests: Math.floor(Math.random() * randomMaxGuests),
    };
  });
};

export const randomizeTableData = (tables) => {
  return tables.map((table) => ({
    ...table,
    warning: Math.random() > 0.8,
    guests: Math.floor(Math.random() * table.maxGuests),
  }));
};
