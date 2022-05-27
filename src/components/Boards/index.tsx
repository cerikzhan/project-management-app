import React, { useEffect, useState } from 'react';
import cl from './boards.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { deleteBoard, fetchAllBoards } from '../../store/reducers/actionCreators';
import { useTranslation } from 'react-i18next';
import Confirmation from '../Confirmation';
import { Board } from '../../types/Entities/Board';
import { useNavigate } from 'react-router-dom';
import Spinner from './../Spinner';

const Boards: React.FC = () => {
  const [text, setText] = useState('');
  const [idBoard, setIdBoard] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boards } = useAppSelector((state: RootState) => state.boards);

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  const handleOpenModal = async (item: Board) => {
    setText(`${t('board.delete_text')} ${item.title}?`);
    setIdBoard(item.id);
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(deleteBoard(idBoard));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const openBoard = (id: string) => {
    navigate(`/boards/${id}`);
  };

  return (
    <Spinner>
      <div className={cl.boards}>
        {boards.length > 0 ? (
          boards.map((item, i) => (
            <div className={cl.boards__item} key={item.id}>
              <div className={cl['boards__col-narrow']}>{i + 1}</div>
              <div className={cl.boards__col} onClick={() => openBoard(item.id)}>
                {item.title}
              </div>
              <div className={cl.boards__col} onClick={() => openBoard(item.id)}>
                {item.description}
              </div>
              <div className={cl['boards__col-narrow']}>
                <div
                  className="button_trash fa fa-trash-o button-mini"
                  onClick={() => handleOpenModal(item)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="message-box">{t('board.no_results')}</div>
        )}
        <Confirmation
          header={t('board.delete')}
          text={text}
          show={showModal}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      </div>
    </Spinner>
  );
};

export default Boards;
