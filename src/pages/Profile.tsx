import React, { useState } from 'react';
import UserFrom from '../components/Form';
import { changeUser, deleteUser } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useTranslation } from 'react-i18next';
import Confirmation from '../components/Confirmation';
import Spinner from '../components/Spinner';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const { user } = useAppSelector((state) => state.user);
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(user.login || '');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeUser({ id: user.id, login, name, password }));
    setPassword('');
  };

  const handleOpenModal = async () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(deleteUser(user.id));
    setLogin('');
    setPassword('');
    setName('');
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Spinner>
      <div className="paper width-fit">
        <UserFrom
          name={name}
          password={password}
          login={login}
          setName={setName}
          setPassword={setPassword}
          setLogin={setLogin}
          submitHandler={submitHandler}
          submitValue={'user.user_edit'}
          title={'user.profile_page'}
        />
        <button
          className="white-button btn big-button"
          type="button"
          onClick={() => handleOpenModal()}
        >
          {t('user.user_delete')}
        </button>
        <Confirmation
          header={t('user.profile_delete')}
          text={t('user.profile_delete_text')}
          show={showModal}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      </div>
    </Spinner>
  );
};

export default Profile;
