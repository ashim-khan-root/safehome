const grid = document.querySelector('[data-category-grid]');
if (grid) {
  const cards = [...grid.querySelectorAll('[data-category-card]')];
  const status = document.querySelector('[data-search-status]');
  const empty = document.querySelector('[data-search-empty]');
  const inputs = [...document.querySelectorAll('input[name="q"]')];
  const forms = [...document.querySelectorAll('form[action*="categories/"]')];

  const normalize = (value) => String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const haystacks = cards.map((card) => normalize([
    card.getAttribute('data-title'),
    card.getAttribute('data-description'),
    card.getAttribute('data-products'),
  ].join(' ')));

  const apply = (raw) => {
    const terms = normalize(raw).trim().split(/\s+/).filter(Boolean);
    let shown = 0;

    cards.forEach((card, i) => {
      const match = terms.every((term) => haystacks[i].includes(term));
      cards[i].style.display = match ? '' : 'none';
      if (match) shown += 1;
    });

    if (empty) empty.hidden = terms.length === 0 || shown !== 0;

    if (status) {
      if (terms.length === 0) {
        status.textContent = '';
      } else {
        const noun = shown === 1 ? 'category matches' : 'categories match';
        status.textContent = `${shown} ${noun} "${String(raw).trim()}"`;
      }
    }
  };

  const setInputs = (value) => {
    inputs.forEach((input, i) => { inputs[i].value = value; });
  };

  const writeUrl = (value) => {
    const url = new URL(window.location.href);
    if (String(value).trim()) {
      url.searchParams.set('q', value);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const filter = (value) => {
    setInputs(value);
    apply(value);
    writeUrl(value);
  };

  const initial = new URLSearchParams(window.location.search).get('q');
  if (initial) {
    setInputs(initial);
    apply(initial);
  }

  inputs.forEach((input) => input.addEventListener('input', () => filter(input.value)));

  forms.forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input[name="q"]');
    if (!input) return;
    filter(input.value);
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}
