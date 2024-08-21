import { observer } from "mobx-react-lite";
import langStore from "../store/langStore";
import Sign from "./Sign";
import styles from "./styles/signs.module.scss"
import { Link } from "react-router-dom";

const Signs = observer(() => {
  const currentLang = langStore.getlang(); // Получаем текущий язык

  return (
    <div className={styles.signs}>
      {
        langStore.dictionary[currentLang].signs.map((sign, index) => (
          <Link  to={`/${sign.englishName}`} key={index} >
            <Sign

              key={index} 
              signName={sign.name}
              signEnName={sign.englishName}
              dates={sign.dateRange}
            />
          </Link>
        ))
      }
    </div>
  );
});

export default Signs;
