{
  const signIn = document.querySelector('.sign-in');
  const signUp = document.querySelector('.sign-up');
  const welcome = document.querySelector('.welcome-sign-in');
  const subscribe = document.querySelector('.subscribe');

  const passwordSignIn = document.querySelector('.password-sign-in');
  const passwordSignUp = document.querySelector('.password-sign-up');

  const showIcon = document.querySelector('.show-icon');
  const showIcon2 = document.querySelector('.show-icon2');

  function main() {
    // Escuta o evento 'submit' para evitar que a página recarregue
    document.addEventListener('submit', (e) => {
      handleSubmit(e);
    });

    // Função para evitar que o site recarregue ao apertar 'login' ou 'create'
    function handleSubmit(e) {
      e.preventDefault();
    }

    // Função para mostrar ou ocultar senha
    function showHide(e) {
      const el = e.target;

      if (el.classList.contains('show-icon')) {
        passwordSignIn.focus();
        showIcon.setAttribute('class', 'show-off-icon');
        showIcon.src = 'assets/img/showoff.svg';
        showIcon.setAttribute('title', 'Hide');
        passwordSignIn.setAttribute('type', 'text');
      } else if (el.classList.contains('show-off-icon')) {
        passwordSignIn.focus();
        showIcon.setAttribute('class', 'show-icon');
        showIcon.src = 'assets/img/show.svg';
        showIcon.setAttribute('title', 'Show');
        passwordSignIn.setAttribute('type', 'password');
      }

      if (el.classList.contains('show-icon2')) {
        passwordSignUp.focus();
        showIcon2.setAttribute('class', 'show-off-icon2');
        showIcon2.src = 'assets/img/showoff.svg';
        showIcon2.setAttribute('title', 'Hide');
        passwordSignUp.setAttribute('type', 'text');
      } else if (el.classList.contains('show-off-icon2')) {
        passwordSignUp.focus();
        showIcon2.setAttribute('class', 'show-icon2');
        showIcon2.src = 'assets/img/show.svg';
        showIcon2.setAttribute('title', 'Show');
        passwordSignUp.setAttribute('type', 'password');
      }
    }

    document.addEventListener('click', showHide);

    function signButton(e) {
      const el = e.target;

      if (el.classList.contains('sign-up-button')) {
        signIn.classList.add('animation1');
        subscribe.classList.add('animation2');
        welcome.classList.add('animation3');
        signUp.classList.add('animation4');
        signUp.style.zIndex = '2';
        signUp.style.opacity = '1';
        welcome.style.zIndex = '2';
        welcome.style.opacity = '1';
      } else if (el.classList.contains('sign-in-button')) {
        signIn.classList.remove('animation1');
        subscribe.classList.remove('animation2');
        welcome.classList.remove('animation3');
        signUp.classList.remove('animation4');
        signUp.style.zIndex = '0';
        welcome.style.zIndex = '0';
        signUp.style.opacity = '0';
        welcome.style.opacity = '0';
      }
    }
    document.addEventListener('click', signButton);

    (function validatingSignUp() {
      const inputUsername = document.querySelector('.require-username');
      const warningUsername = document.querySelector('.warning-username');
      const inputPassword = document.querySelector('.require-password');
      const warningPassword = document.querySelector('.warning-password');

      inputUsername.addEventListener('focus', () => {
        warningUsername.style.display = 'block';
      });
      inputUsername.addEventListener('blur', () => {
        warningUsername.style.display = 'none';
      });
      inputPassword.addEventListener('focus', () => {
        warningPassword.style.display = 'block';
      });
      inputPassword.addEventListener('blur', () => {
        warningPassword.style.display = 'none';
      });
    })();
  }
  main();
}
