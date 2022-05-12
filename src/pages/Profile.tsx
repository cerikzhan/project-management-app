import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks/redux';

const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state);
  const { t } = useTranslation();
  return (
    <>
      {t('user.profile_page')}
      {JSON.stringify(user)}
    </>
  );
};

export default Profile;
