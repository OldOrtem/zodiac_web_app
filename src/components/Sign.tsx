import styles from "./styles/sign.module.scss"
import ariesImage from '../../assets/images/Aries.png';

interface SignProps{
    signName: string;
    signEnName: string;
    dates: string;
}


const Sign = ({signName, signEnName, dates}:SignProps) => {

    const backgroundImageUrl = new URL(`../assets/images/${signEnName}.png`, import.meta.url).href;


    return(
        <div className={styles.sign}>
            
            <img src={backgroundImageUrl} alt="icon" />
            <div className={styles.sign__name}>{signName}</div>
            <div className={styles.sign__dates}>{dates}</div>
        </div>
    );   
}

export default Sign;