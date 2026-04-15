(function bootstrapSite() {
  var page = document.body.getAttribute('data-page');
  var activeNav = document.querySelector('[data-nav="' + page + '"]');
  if (activeNav) {
    activeNav.classList.add('active');
    activeNav.setAttribute('aria-current', 'page');
  }

  var yearSlot = document.getElementById('year');
  if (yearSlot) {
    yearSlot.textContent = String(new Date().getFullYear());
  }
})();
