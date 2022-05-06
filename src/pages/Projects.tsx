import React, { useEffect } from 'react';
import { fetchAllBoards } from '../store/reducers/actionCreators';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { RootState } from '../store/store';

const Projects: React.FC = () => {
  const { boards } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, []);

  return (
    <div>
      Projects page
      {JSON.stringify(boards)}
    </div>
  );
};

export default Projects;
