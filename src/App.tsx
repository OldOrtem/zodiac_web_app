
import { SDKProvider} from '@telegram-apps/sdk-react';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './providers/router';


const App: React.FC = () => {
  // const [userId, setUserId] = useState<string | null>(null);
  
  return (
    <SDKProvider acceptCustomStyles >
      <RouterProvider router={router}/>
    </SDKProvider>
  );
};

export default App;
