(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnCloseRef = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    // menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnCloseRef.addEventListener('click', () => {
    const expanded =
      menuBtnCloseRef.getAttribute('aria-expanded') === 'true' || false;

    // menuBtnCloseRef.classList.toggle('is-open');
    menuBtnCloseRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
