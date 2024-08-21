import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HoroscopeService from "../service/HoroscopeService";
import langStore from "../store/langStore";
import styles from "./styles/description.module.scss"
import Loader from "./Loader";
import { observer } from "mobx-react-lite";
import { initBackButton } from '@telegram-apps/sdk';

const DescriptionPage = observer(() => {
    const {name} = useParams();
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const [backButton] = initBackButton();
    
    useEffect(()=>{
        backButton.show();
        backButton.on('click', () => {
            navigate(-1);
          });
        
        fetching()
        async function fetching():Promise<void>{
            setIsLoading(true)
            setDescription("");
            const des:string = await HoroscopeService.loadHoroscope(name as string, langStore.lang);
            setDescription(des);
            setIsLoading(false)
        }
        return(()=>{
                backButton.hide();
            })
    },[langStore.lang])

    


    return (
      <div className={styles.des}>
        {description}
        {(isLoading && <Loader />)}
      </div>
    );
  });
  
  export default DescriptionPage;
  