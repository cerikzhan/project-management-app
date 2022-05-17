import React, { useEffect, useState } from 'react';
import UserFrom from '../components/Form';
import cl from '../components/Form/form.module.scss';
import { changeUser, deleteUser } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Confirmation from '../components/Confirmation';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const { user } = useAppSelector((state) => state.user);
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(user.login || '');
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeUser({ id: user.id, login, name, password }));
    setPassword('');
  };

  const handleOpenModal = async () => {
    setHeader(t('user.profile_delete'));
    setText(t('user.profile_delete_text'));
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

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate('/signup');
    }
  }, [user.id]);

  return (
    <>
      <UserFrom
        name={name}
        password={password}
        login={login}
        setName={setName}
        setPassword={setPassword}
        setLogin={setLogin}
        submitHandler={submitHandler}
        submitValue={'user.user_edit'}
      />
      <button className={cl.form__delete} type="button" onClick={() => handleOpenModal()}>
        {t('user.user_delete')}
      </button>
      <Confirmation
        header={header}
        text={text}
        show={showModal}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </>
  );
};

export default Profile;
