import styles from "./form.module.scss";

export const FormNovidades = () => {
  return (
    <form
      action="/pagina-processa-dados-do-form"
      method="post"
      className={styles.formContainer}
    >
      <input type="email" placeholder="Adicione o seu e-mail...." required />
      <input type="submit" value="Enviar" />
    </form>
  );
};
