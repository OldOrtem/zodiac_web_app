import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HoroscopeService from "../service/HoroscopeService";
import langStore from "../store/langStore";
import styles from "./styles/description.module.scss"

const DescriptionPage = () => {
    const {name} = useParams();
    const [description, setDescription] = useState("");
    
    useEffect(()=>{
        async function fetching():Promise<void>{
            const des:string = await HoroscopeService.loadHoroscope(name as string, langStore.lang);
            setDescription(des);
        }
        fetching()
    },[description, name])

    


    return (
      <div className={styles.des}>
        
        {description}
      </div>
    );
  };
  
  export default DescriptionPage;
  