import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import cl from './search-bar.module.scss';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [setDebounce] = useDebounce('');

  useEffect(() => {
    setDebounce(search);
  }, [search]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={cl.search_bar}>
      <input
        value={search}
        className={cl.search_bar__input}
        type="text"
        placeholder="Search"
        onChange={handleSearchInputChange}
      />
      <img className={cl.search_bar__button} src={SearchIcon} alt="search" />
    </div>
  );
};
