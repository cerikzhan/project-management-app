import React, { useEffect } from 'react';
import cl from './boards.module.scss';
import './../../assets/library/toggle.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import loader from './../../assets/images/loader.gif';
import { RootState } from '../../store/store';
import { getAllBoards } from '../../store/reducers/actionCreators';
import { useTranslation } from 'react-i18next';

const Boards: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);
  const { boards, loading } = useAppSelector((state: RootState) => state.boards);
  return (
    <div className={cl.boards}>
      {loading ? (
        <img className="loader" src={loader} alt="Load results" />
      ) : boards.length > 0 ? (
        boards.map((item, i) => (
          <div className={cl.boards__item} key={item.id}>
            <h3>
              {i + 1}. {item.title}
            </h3>
          </div>
        ))
      ) : (
        <div className="message-box">{t('board.no_results')}</div>
      )}
    </div>
  );
};

export default Boards;
