import React, {useState, useMemo} from 'react';
import SearchInput from '../UI/SearchInput/SearchInput';
import TableGrid from '../TableGrid/TableGrid';
import {SearchableTableWrapper} from './SearchableTable.styles';
import {debounce} from 'lodash';

const SearchableTable = ({tables}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  const debouncedSetQuery =
    debounce((query) => {
      setDebouncedQuery(query);
    }, 300);
  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    debouncedSetQuery(query);
  };
  
  const filteredTables = useMemo(() => {
    const lowerCaseQuery = debouncedQuery.toLowerCase();
    return tables.filter(
      ({name, type}) => {
        return name.toLowerCase().includes(lowerCaseQuery) || type.toLowerCase().includes(lowerCaseQuery)
      }
    );
  }, [debouncedQuery, tables]);
  
  
  return (
    <SearchableTableWrapper>
      <SearchInput
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name or type"
      />
      {filteredTables.length > 0 ? <TableGrid tables={filteredTables}/> : <p>No tables found</p>}
    </SearchableTableWrapper>
  );
};

export default SearchableTable;
