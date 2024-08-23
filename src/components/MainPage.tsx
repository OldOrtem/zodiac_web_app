
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import langStore from '../store/langStore';
import { useInitData } from '@telegram-apps/sdk-react';

const MainPage = () => {
    const initData = useInitData();

  useEffect(() => {
    const getLanguage = () => {
      const lang = initData?.user?.languageCode as string;
      langStore.setLang(lang === 'ru' ? 'ru' : 'en')
    };

    getLanguage();
  }, []);

  
    return (
      <main>
        <Header/>
        <Outlet/>
      </main>
    );
  };
  
  export default MainPage;
  
