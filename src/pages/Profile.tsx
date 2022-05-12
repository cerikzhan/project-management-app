import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';

const Profile: React.FC = () => {
  const { user } = useAppSelector((state: RootState) => state.boards);
  const { t } = useTranslation();
  return (
    <>
      {t('user.profile_page')}
      console.log({JSON.stringify(user)});
    </>
  );
};

export default Profile;
