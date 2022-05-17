import React, { useEffect, useState } from 'react';
import UserFrom from '../components/Form';
import { signUpUser } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cl from '../components/Form/form.module.scss';
import { userSlice } from '../store/reducers/userSlice';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const { setError } = userSlice.actions;

  const { user } = useAppSelector((state) => state.user);
  const { error } = useAppSelector((state) => state.user);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUpUser({ id: user.id, login, name, password }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      navigate('/boards');
    }
  }, [user.id]);

  useEffect(() => {
    dispatch(setError());
  }, []);

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
        submitValue={'user.user_signUp'}
        title={'user.signup_page'}
      />
      {error ? <p className={cl.form__error}>{t('user.user_signUp_error')}</p> : null}
    </>
  );
};

export default Signup;
