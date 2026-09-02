(function () {
  function currentLang() {
    return document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function applyLang(lang) {
    if (typeof window.__setSiteLang === 'function') {
      window.__setSiteLang(lang);
    } else {
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
      try { localStorage.setItem('site-lang', lang); } catch (e) {}
    }
  }

  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('#lang-toggle');
    if (!toggle) return;
    event.preventDefault();
    var option = event.target.closest('[data-set-lang]');
    var next = option ? option.getAttribute('data-set-lang') : (currentLang() === 'zh' ? 'en' : 'zh');
    applyLang(next);
  });
})();
