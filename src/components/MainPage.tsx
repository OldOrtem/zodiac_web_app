import { useEffect, useState } from "react";
import Signs from "./Signs";

import { useInitData } from "@telegram-apps/sdk-react";

const MainPage = () => {
    const [language, setLanguage] = useState<string>('en'); // Default to 'en'
    const initData = useInitData();

  useEffect(() => {
    // Получение языка из TelegramWebApp API
    const getLanguage = () => {
      const lang = initData?.user?.languageCode as string;
      setLanguage(lang === 'ru' ? 'e' : 'en'); // Вы можете добавить другие языки здесь
    };

    getLanguage();
  }, []);

  
    return (
      <main>
        {language}
        <Signs/>
      </main>
    );
  };
  
  export default MainPage;
  