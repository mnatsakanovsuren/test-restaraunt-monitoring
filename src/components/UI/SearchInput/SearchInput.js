import React from 'react';
import {SearchInputWrapper} from './SearchInput.styles';

const SearchInput = ({value, onChange, placeholder = 'Enter search query'}) => {
  return (
    <SearchInputWrapper className={'search-input-wrapper'}>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
