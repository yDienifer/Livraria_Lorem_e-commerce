import styles from "./form.module.scss";

export const FormNovidades = () => {
  window.onload = function () {
    
    let botao = document.getElementById("botao-enviar");

    botao.onclick = function (e) {
      var inputEmail = document.getElementById("input-email");
      const emailDoUsuário = inputEmail.value;

      if (inputEmail.value == "") {
        inputEmail.style.border = "1px solid Red";
        botao.style.backgroundColor = "Red";
      } else {
        if (confirm("Confirmou se todos os dados estão corretos?")) {
          botao.style.backgroundColor = "Green";
          alert(`Parabéns! O email ${emailDoUsuário} foi enviado com sucesso!`);
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
        id="input-email"
      />
      <input type="submit" value="Enviar" id="botao-enviar" />
    </form>
  );
};