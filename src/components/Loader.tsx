
import styles from "./styles/loader.module.scss"
import { observer } from "mobx-react-lite";

const Loader = observer(() => {
    return(
        <div className={styles.loader}>
            <div className={styles.loader__imgContainer}>
                <img className={styles.loader__img} src="https://usagif.com/wp-content/uploads/loading-50.gif" alt="..." />
            </div>
        </div>
    );
});

export default Loader;