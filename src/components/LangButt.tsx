import { observer } from "mobx-react-lite";
import langStore from "../store/langStore";
import langService from "../service/langService";
import styles from "./styles/langbutt.module.scss"

const Loader = observer(() => {
    const tap = ()=>{
        langService.toggleLang();
    }    
    return(
        <div onClick={tap} className={styles.lang}>
            {langStore.lang}
        </div>
    );
});

export default Loader;