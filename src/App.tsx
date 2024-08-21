
import { SDKProvider} from '@telegram-apps/sdk-react';
import './App.css'
import MainPage from './components/MainPage';


const App: React.FC = () => {
  // const [userId, setUserId] = useState<string | null>(null);
  
  return (
    <SDKProvider acceptCustomStyles >
      
      <MainPage/>
    </SDKProvider>
  );
};

export default App;
