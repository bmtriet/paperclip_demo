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

  var revealTargets = document.querySelectorAll('.reveal');
  if (!revealTargets.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach(function (node) {
      node.classList.add('is-revealed');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.18,
  });

  revealTargets.forEach(function (node) {
    observer.observe(node);
  });
})();
