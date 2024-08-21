
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainPage = () => {
//     const initData = useInitData();

//   useEffect(() => {
//     const getLanguage = () => {
//       const lang = initData?.user?.languageCode as string;
//       langStore.setLang(lang === 'ru' ? 'ru' : 'en')
//     };

//     getLanguage();
//   }, []);

  
    return (
      <main>
        <Header/>
        <Outlet/>
      </main>
    );
  };
  
  export default MainPage;
  