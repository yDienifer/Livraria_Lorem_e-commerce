import { useRef } from "react"; /* Utilizado para criar uma referência a um elemento do DOM, sendo
manipulado no React de forma imperativa. */

import styles from "./form.module.scss";

export const FormNovidades = () => {
  const inputEmailRef = useRef(null);
  // Referência

  window.onload = function () {
    let botao = document.getElementById("botao-enviar");

    botao.onclick = function (e) {
      if (inputEmailRef.current.value === "") {
        inputEmailRef.current.style.borderColor = "red";
        botao.style.backgroundColor = "red";
      } else {
        if (confirm("Você verificou se o endereço de e-mail está correto?")) {
          botao.style.backgroundColor = "green";
          alert(
            `Parabéns! O e-mail ${inputEmailRef.current.value} foi registrado com sucesso!`
          );
        } else {
          e.preventDefault(); // Evita que o form seja enviado automaticamente
        }
      }
    };
  };

  return (
    <form className={styles.formContainer}>
      <input
        type="email"
        placeholder="Adicione o seu e-mail...."
        required
        ref={inputEmailRef} // Associa o inputEmailRef à referência
      />
      <input type="submit" value="Enviar" id="botao-enviar" />
    </form>
  );
};