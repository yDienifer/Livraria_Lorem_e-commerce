import styles from './atalhos.module.scss';

export const Atalhos = ({ linkAtalho, nomeAtalho }) => {
  return (
    <ul className={styles.atalho}>
      <li>
        <a href={linkAtalho}>{nomeAtalho}</a> 
      </li>
    </ul>
  );
};
