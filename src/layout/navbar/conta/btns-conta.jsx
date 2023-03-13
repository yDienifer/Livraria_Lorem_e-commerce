import styles from './btns-conta.module.scss';
import Carrinho from './carrinho/carrinho';

export default function BtnsConta() {
    return (
        <div className={styles.btns}>
            <Carrinho />
            <ion-icon name="person-circle-outline"></ion-icon>
        </div>
    )
}