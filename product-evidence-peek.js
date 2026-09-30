/* One evidence-card presentation; retain the original button, IDs and modal handlers. */
(() => {
  const cards = {
    'S01-full': { title: 'Explore the teacher workspace', copy: 'The working product and its main tools.', position: '58% 42%' },
    S02: { title: 'Explore connected knowledge', copy: 'Automotive topics linked in the knowledge graph.', position: '48% 58%' },
    S03: { title: 'Inspect a supported answer', copy: 'A professional answer with its references.', position: 'center 45%' },
    S05: { title: 'Read the original source', copy: 'The retrieved passage behind the citation.', position: 'center 35%' },
    S07: { title: 'See the teaching context', copy: 'Course, chapter and lesson duration inputs.', position: 'center 42%' },
    S08: { title: 'See the grounding process', copy: 'Teaching resources retrieved for the draft.', position: 'center 44%' },
    S09: { title: 'See the refinement workspace', copy: 'The lesson and assistant, side by side.', position: '72% center' },
    S10: { title: 'Explore precise editing', copy: 'An editable teaching slide and its controls.', position: 'center 40%' },
    S11: { title: 'Inspect question-level evidence', copy: 'A question, explanation and response distribution.', position: 'center 72%' },
    S12: { title: 'Review knowledge-point performance', copy: 'Scores highlight concepts needing review.', position: 'center 45%' },
    S13: { title: 'Read teaching recommendations', copy: 'Suggested adjustments in the original product.', position: 'left top' },
    'S14-error': { title: 'Compare failure and retest', copy: 'The original error and supplied retest evidence.', position: 'center 30%' }
  };
  const selector = '[data-evidence], #open-evidence, #source-evidence, #open-failure-evidence';
  document.querySelectorAll(selector).forEach(button => {
    // The overview already displays the full product capture; keep its link compact.
    if (button.closest('#product-overview')) {
      button.classList.remove('product-evidence-peek', 'product-evidence-inline');
      button.classList.add('evidence-link');
      button.textContent = 'View product evidence ↗';
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-controls', 'evidence-modal');
      return;
    }
    const screenshot = button.dataset.evidence?.split(',')[0] ||
      (button.id === 'source-evidence' ? 'S05' : button.id === 'open-failure-evidence' ? 'S14-error' : 'S03');
    const card = screenshot === 'S02' && button.closest('#p05')
      ? { ...cards.S02, copy: 'Automotive knowledge organised into linked topics and resources.' }
      : cards[screenshot];
    if (!card) return;
    button.classList.remove('evidence-link', 'product-evidence-inline');
    button.classList.add('product-evidence-peek');
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', button.id === 'open-failure-evidence' ? 'failure-modal' : 'evidence-modal');
    button.setAttribute('aria-label', `View product evidence: ${card.title}`);
    const text = (className, value) => {
      const element = document.createElement('span');
      element.className = className;
      element.textContent = value;
      return element;
    };
    const preview = document.createElement('span');
    preview.className = 'evidence-peek-preview';
    const image = document.createElement('img');
    image.src = `assets/${screenshot}.png`;
    image.alt = card.copy;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.style.objectPosition = card.position;
    preview.append(image);
    const action = document.createElement('span');
    action.className = 'evidence-peek-action';
    const arrow = text('evidence-action-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    action.append(text('evidence-action-label', 'View product evidence'), arrow);
    button.replaceChildren(
      text('evidence-peek-eyebrow', 'REAL PRODUCT'),
      text('evidence-peek-heading', card.title),
      text('evidence-peek-copy', card.copy),
      preview,
      action
    );
  });
  document.querySelectorAll('#citation').forEach(chip => {
    chip.classList.add('citation-chip');
    if (chip.querySelector('.citation-microcopy')) return;
    const microcopy = document.createElement('span');
    microcopy.className = 'citation-microcopy';
    microcopy.textContent = 'Inspect source';
    microcopy.setAttribute('aria-hidden', 'true');
    chip.append(microcopy);
  });
})();