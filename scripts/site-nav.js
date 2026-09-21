(() => {
  const header = document.querySelector('[data-cs-header]');
  if (!header) return;
  const toggle = header.querySelector('.cs-menu-toggle');
  const nav = header.querySelector('.cs-primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
})();
