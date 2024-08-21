
import { observer } from "mobx-react-lite";
import langStore from "../store/langStore";
import LangButt from "./LangButt";
import styles from "./styles/header.module.scss"


const MainPage = observer(() => {

  
    return (
      <header className={styles.header}>
        <div className={styles.title}>{langStore.dictionary[langStore.getlang()].about}</div>
        <LangButt/>


      </header>
    );
  });
  
  export default MainPage;
  