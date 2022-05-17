import React, { useEffect, useState } from 'react';
import cl from './boards.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import loader from './../../assets/images/loader.gif';
import { RootState } from '../../store/store';
import { deleteBoard, getAllBoards } from '../../store/reducers/actionCreators';
import { useTranslation } from 'react-i18next';
import Confirmation from '../Confirmation';
import { Board } from '../../types/Entities/Board';
import { useNavigate } from 'react-router-dom';
import './../../assets/library/fontawesome.css';

const Boards: React.FC = () => {
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [idBoard, setIdBoard] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boards, loading } = useAppSelector((state: RootState) => state.boards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const handleOpenModal = async (item: Board) => {
    setHeader(t('board.delete'));
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
    navigate(`/board/${id}`);
  };

  return (
    <div className={cl.boards}>
      {loading ? (
        <img className="loader" src={loader} alt="Load results" />
      ) : boards.length > 0 ? (
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
              <div className={cl.boards__button} onClick={() => handleOpenModal(item)}>
                <i className="fa fa-trash-o"></i>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="message-box">{t('board.no_results')}</div>
      )}
      <Confirmation
        header={header}
        text={text}
        show={showModal}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>
  );
};

export default Boards;
