import { FormNovidades } from "./form/form";
import styles from "./novidades.module.scss";

export const Novidades = () => {
  return (
    <div className={styles.novidadesContainer}>
      <p>Cadastre-se agora e receba as melhores promoções e novidades em primeira mão!</p>
      <div className={styles.teste}>
        <FormNovidades />
      </div>
      
    </div>
  );
};
