// IT / EN toggle. The choice is remembered per browser; ?lang=it or ?lang=en in a link overrides it.
(function () {
  var root = document.documentElement;
  function apply(l) {
    root.dataset.lang = l;
    root.lang = l;
    var tIt = root.getAttribute('data-title-it'), tEn = root.getAttribute('data-title-en');
    if (l === 'it' && tIt) document.title = tIt;
    if (l === 'en' && tEn) document.title = tEn;
    var b = document.querySelector('button.lang');
    if (b) {
      b.textContent = l === 'it' ? 'EN' : 'IT';
      b.setAttribute('aria-label', l === 'it' ? 'Switch to English' : 'Passa all’italiano');
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    apply(root.dataset.lang === 'it' ? 'it' : 'en');
    var b = document.querySelector('button.lang');
    if (b) b.addEventListener('click', function () {
      var l = root.dataset.lang === 'it' ? 'en' : 'it';
      try { localStorage.setItem('lang', l); } catch (e) {}
      apply(l);
    });
  });
})();
