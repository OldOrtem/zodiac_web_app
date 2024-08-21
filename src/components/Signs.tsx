import { observer } from "mobx-react-lite";
import langStore from "../store/langStore";
import Sign from "./Sign";
import styles from "./styles/signs.module.scss"

const Signs = observer(() => {
  const currentLang = langStore.getlang(); // Получаем текущий язык

  return (
    <div className={styles.signs}>
      {
        langStore.dictionary[currentLang].signs.map((sign, index) => (
          <Sign
            key={index} 
            signName={sign.name}
            signEnName={sign.englishName}
            dates={sign.dateRange}
          />
        ))
      }
    </div>
  );
});

export default Signs;
