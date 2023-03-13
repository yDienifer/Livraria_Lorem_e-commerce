import styles from './marquee.module.scss'

function Marquee() {
    return (
        <div className={styles.marquee}>
            <h1> Promoções do <span>dia</span></h1>
            <h1> Promoções do <span>dia</span></h1>
            <h1> Promoções do <span>dia</span></h1>
        </div>
    )
}

export default Marquee
