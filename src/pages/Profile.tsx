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
  const [name, SetName] = useState(user.name || '');
  const [password, SetPassword] = useState('');
  const [login, SetLogin] = useState(user.login || '');

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeUser({ user: { name, login, password }, userId: user.userId }));
    SetPassword('');
  };

  const clickHandler = () => {
    dispatch(deleteUser(user.userId));
    SetLogin('');
    SetPassword('');
    SetName('');
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userId) {
      navigate('/signup');
    }
  }, [user.userId]);

  return (
    <>
      <UserFrom
        name={name}
        password={password}
        login={login}
        SetName={SetName}
        SetPassword={SetPassword}
        SetLogin={SetLogin}
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
