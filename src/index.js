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

    console.log(e.target);
    console.log(e.currentTarget);

    // e.preventDefault();
  };

  navLinks.forEach(navLink => navLink.addEventListener('click', onMenuClick));

  menuBtn.addEventListener('click', toggleMenu);

  // Modal and form control
  const modal = document.querySelector('.js-modal');
  const openFormBtn = document.querySelector('.js-btn-form');
  const modalForm = document.querySelector('.js-form');
  const closeModalBtn = document.querySelector('.js-btn-close');

  openFormBtn.addEventListener('click', () => {
    modal.classList.remove('modal-close');
    document.body.classList.add('modal-open');
  });

  modal.addEventListener('click', e => {
    if (e.target === e.currentTarget || e.target === closeModalBtn) {
      modal.classList.add('modal-close');
      document.body.classList.remove('modal-open');
      modalForm.reset();
    }
  });

  modalForm.addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    modal.classList.remove('modal-open');

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
