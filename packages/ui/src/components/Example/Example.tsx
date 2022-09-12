import React from 'react';
import { useTranslation } from 'react-i18next';

const Example: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t('hello')}</div>;
};
export default Example;
