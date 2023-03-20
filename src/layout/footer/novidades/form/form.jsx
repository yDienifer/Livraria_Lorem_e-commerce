import { useRef } from "react";
import styles from "./form.module.scss";

export const FormNovidades = () => {
  const inputEmailRef = useRef(null);
  const botaoRef = useRef(null);

  function submitBtn(e) {
    if (!inputEmailRef.current.checkValidity()) {
      // Estilização para entrada incorreta
      inputEmailRef.current.style.borderColor = "red";
      // Current = Propriedade do objeto retornado pelo useRef().
      botaoRef.current.style.background = "red";
    } else {
      // Estilização para a entrada correta
      inputEmailRef.current.style.borderColor = "green";
      botaoRef.current.style.background = "green";

      if (inputEmailRef.current.validity.valid) {
        // A entrada está correta, portanto o alerta de confirmação pode ser exibido.
        if (confirm("Você verificou se o endereço de e-mail está correto?")) {
          alert(
            `Parabéns! O e-mail ${inputEmailRef.current.value} foi registrado com sucesso!`
          );
        } else {
          e.preventDefault();
        }
      }
    }
  }

  return (
    <form className={styles.formContainer}>
      <input
        type="email"
        placeholder="Adicione o seu e-mail...."
        required
        ref={inputEmailRef} // Associa o inputEmailRef à referência
      />
      <input
        type="submit"
        value="Enviar"
        id="botao-enviar"
        onClick={submitBtn}
        ref={botaoRef}
      />
    </form>
  );
};
