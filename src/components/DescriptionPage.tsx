import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HoroscopeService from "../service/HoroscopeService";
import langStore from "../store/langStore";
import styles from "./styles/description.module.scss"
import Loader from "./Loader";
import useFetching from "../hooks/useFetching";

const DescriptionPage = () => {
    const {name} = useParams();
    const [description, setDescription] = useState("");

    const [fetching, isLoading, error] = useFetching(
        fetchingDes
      );
    
    
    useEffect(()=>{
        if(error){
            console.log(error)
        }
        fetching()
    },[description, error, fetching, name])

    async function fetchingDes():Promise<void>{
        const des:string = await HoroscopeService.loadHoroscope(name as string, langStore.lang);
        setDescription(des);
    }


    return (
      <div className={styles.des}>
        {(isLoading && <Loader />) || description}
      </div>
    );
  };
  
  export default DescriptionPage;
  