import React, { useEffect, useState } from 'react';
import { fetchAllBoards, fetchDeleteBoard } from '../api/board.api';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';
import Confirmation from './../components/Confirmation';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [header, setHeader] = useState('');
  const [idBoard, setIdBoard] = useState('');
  const [runRequest, setRunRequest] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = async (idBoard: string) => {
    setHeader('Delete board???');
    setIdBoard(idBoard);
    setShowModal(true);
  };

  useEffect(() => {
    if (runRequest) {
      dispatch(fetchDeleteBoard(idBoard));
    }
  }, [runRequest]);

  const { boards } = useAppSelector((state: RootState) => state.boards);
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <div>
      {t('board.boards_page')}
      {boards.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => handleOpenModal(item.id)}>Delete</button>
        </div>
      ))}
      <Confirmation header={header} show={showModal} runRequest={setRunRequest} />
    </div>
  );
};

export default Main;
