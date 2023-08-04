// Código JavaScript personalizado

// Função para alternar o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Evento para mostrar/ocultar o menu hamburguer
document.querySelector('.hamburger-menu').addEventListener('click', function () {
  document.querySelector('.menu-mobile').classList.toggle('show');
});

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

// Script para ativar o menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
