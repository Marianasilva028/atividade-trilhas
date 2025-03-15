document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const erroEmail = document.querySelector(".erro-email");
  const formularioParticipante = document.getElementById("formulario-participante");

  emailInput.addEventListener("input", () => {
      const emailValido = /\S+@\S+\.\S+/.test(emailInput.value);
      erroEmail.style.display = emailValido ? "none" : "block";
  });

  formularioParticipante.addEventListener("submit", (event) => {
      let camposObrigatoriosPreenchidos = true;
      
      // Verifica campos obrigatórios
      const camposObrigatorios = formularioParticipante.querySelectorAll("[required]");
      camposObrigatorios.forEach(campo => {
          if (!campo.value) {
              camposObrigatoriosPreenchidos = false;
              campo.style.borderColor = "red"; 
          } else {
              campo.style.borderColor = "";
          }
      });

      if (!camposObrigatoriosPreenchidos) {
          event.preventDefault(); 
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
      }

      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
          event.preventDefault();
          erroEmail.style.display = "block";
      } else {
          alert("Formulário enviado com sucesso! ");
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const identidadeInput = document.getElementById('identidade');
  const comprovanteInput = document.getElementById('comprovante');

  identidadeInput.addEventListener('change', () => {
      if (identidadeInput.files.length > 0) {
          console.log('Documento de identidade selecionado:', identidadeInput.files[0]);
      }
  });

  comprovanteInput.addEventListener('change', () => {
      if (comprovanteInput.files.length > 0) {
          console.log('Comprovante de residência selecionado:', comprovanteInput.files[0]);
      }
  });
});

const trackButtons = document.querySelectorAll('.track-button');

trackButtons.forEach(button => {
  button.addEventListener('click', () => {
      trackButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
  });
});


