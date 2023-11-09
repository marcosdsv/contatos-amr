// Código JavaScript personalizado
// Adicione eventos de hover para mudar a cor dos ícones de redes sociais no rodapé
document.addEventListener('DOMContentLoaded', function () {
  const socialIcons = document.querySelectorAll('.social-icons a');

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
      this.classList.add('text-danger'); // Adiciona a classe 'text-danger' para mudar a cor do ícone
    });

    icon.addEventListener('mouseout', function () {
      this.classList.remove('text-danger'); // Remove a classe 'text-danger' para voltar à cor original do ícone
    });
  });
});

// Função para alternar o Modo Escuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
