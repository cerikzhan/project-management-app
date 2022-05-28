import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import cl from './search-bar.module.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';

export const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [withDebounce] = useDebounce('');

  useEffect(() => {
    withDebounce(search);
  });

  return (
    <div className={cl.search_bar}>
      <input
        value={search}
        className={cl.search_bar__input}
        type="text"
        placeholder={t('board.search_placeholder')}
        onChange={(event) => setSearch(event.target.value)}
      />
      <img className={cl.search_bar__button} src={SearchIcon} alt="search" />
    </div>
  );
};
