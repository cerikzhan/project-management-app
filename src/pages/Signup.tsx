import React, { useEffect, useState } from 'react';
import UserFrom from '../components/Form';
import { signUpUser } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cl from '../components/Form/form.module.scss';
import { userSlice } from '../store/reducers/userSlice';
import Spinner from '../components/Spinner';
import { StatusCodes } from 'http-status-codes';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const { resetError } = userSlice.actions;

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
    dispatch(resetError());
  }, [user.id, navigate, dispatch, resetError]);

  useEffect(() => {
    if (user.id) {
      navigate('/boards');
    }
    if (
      error &&
      Number(error.code) !== StatusCodes.CONFLICT &&
      Number(error.code) !== StatusCodes.FORBIDDEN
    ) {
      throw new Error(error.message);
    }
  }, [user.id, navigate, error]);

  return (
    <Spinner>
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
      {error && <p className={cl.form__error}>{t('user.user_signUp_error')}</p>}
    </Spinner>
  );
};

export default Signup;
