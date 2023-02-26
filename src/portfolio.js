(() => {
  // Mobile menu control

  const headerMenu = document.querySelector('.js-menu-container');
  const menuBtn = document.querySelector('.js-toggle-btn');
  const navLinks = document.querySelectorAll('.nav__link');

  const toggleMenu = e => {
    const isMenuOpen =
      menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);

    headerMenu.classList.toggle('menu-open');
    menuBtn.classList.toggle('active');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const onMenuClick = e => {
    if (menuBtn.classList.contains('active')) {
      headerMenu.classList.remove('menu-open');
      menuBtn.classList.remove('active');
    }
  };

  navLinks.forEach(navLink => navLink.addEventListener('click', onMenuClick));

  menuBtn.addEventListener('click', toggleMenu);

  // Subscribe form control

  const subForm = document.querySelector('.js-sub-form');

  subForm.addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    headerMenu.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
