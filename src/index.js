(() => {
  const headerMenu = document.querySelector('.js-menu-container');
  const menuBtn = document.querySelector('.js-toggle-btn');

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);
    headerMenu.classList.toggle('menu-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  menuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    headerMenu.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
