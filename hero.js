/* Ambient signals run only while their actual diagram is visible. */
(() => {
  const hero = document.getElementById('p01');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = document.querySelectorAll('#p03 .transformation-path li:nth-child(-n+3), #p05 .flow-ai, #p07 .chain-tabs, #p08 .pipeline-connector, #p10 .retest-checks');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === hero) {
        if (entry.isIntersecting && !motion.matches) hero.classList.add('hero-motion');
        hero.classList.toggle('hero-paused', !entry.isIntersecting || motion.matches);
      } else {
        entry.target.classList.toggle('signal-visible', entry.isIntersecting);
      }
    }
  }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
  if (hero) observer.observe(hero);
  targets.forEach(target => observer.observe(target));
  const sync = () => document.body.classList.toggle('signals-paused', document.hidden || motion.matches);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', sync);
  sync();
})();