import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useInitData } from "@telegram-apps/sdk-react";
import langStore from "../store/langStore";

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
        <Outlet/>
      </main>
    );
  };
  
  export default MainPage;
  