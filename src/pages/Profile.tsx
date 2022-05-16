import React, { useEffect, useState } from 'react';
import UserFrom from '../components/Form';
import cl from '../components/Form/form.module.scss';
import { changeUser, deleteUser } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const { user } = useAppSelector((state) => state.user);
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(user.login || '');

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeUser({ id: user.id, login, name, password }));
    setPassword('');
  };

  const clickHandler = () => {
    dispatch(deleteUser(user.id));
    setLogin('');
    setPassword('');
    setName('');
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
      <button className={cl.form__delete} type="button" onClick={clickHandler}>
        {t('user.user_delete')}
      </button>
    </>
  );
};

export default Profile;
