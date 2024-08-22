import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './layout';

function App() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <Navbar />
      <h1>{t('welcome')}</h1>
      <button>{t('login')}</button>
    </div>
  );
}

export default App;
