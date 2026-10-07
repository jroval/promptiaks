const RATINGS_KEY = "promptiaks-ratings";

function loadRatingOverrides() {
  try {
    return JSON.parse(localStorage.getItem(RATINGS_KEY)) || {};
  } catch (err) {
    return {};
  }
}

function saveRatingOverride(id, rating) {
  try {
    const overrides = loadRatingOverrides();
    overrides[id] = rating;
    localStorage.setItem(RATINGS_KEY, JSON.stringify(overrides));
  } catch (err) {
    // localStorage unavailable, rating just won't persist across reloads
  }
}

let livePrompts = [];

function initPrompts(prompts) {
  const overrides = loadRatingOverrides();
  livePrompts = prompts.map((p) => ({
    ...p,
    rating: overrides[p.id] !== undefined ? overrides[p.id] : p.rating || 0,
  }));
}

function sortedPrompts() {
  return [...livePrompts].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return a.id - b.id;
  });
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("count");
  countEl.textContent = livePrompts.length;

  const placeholderSVG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">' +
      '<rect width="100%" height="100%" fill="#20202a"/>' +
      '<text x="50%" y="50%" fill="#55555f" font-size="18" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">Añade tu imagen</text>' +
      '</svg>'
    );

  const ordered = sortedPrompts();

  grid.innerHTML = ordered
    .map((p, i) => `
      <article class="card" data-id="${p.id}" style="--delay: ${(i % 12) * 45}ms">
        <div class="card-image-wrap">
          <img class="img-bg" src="${p.image}" alt="" aria-hidden="true" loading="lazy"
               onerror="this.onerror=null;this.src='${placeholderSVG}';">
          <img class="img-main" src="${p.image}" alt="${escapeHTML(p.title)}" loading="lazy"
               style="${imageStyle(p)}"
               onload="fitImage(this)"
               onerror="this.onerror=null;this.src='${placeholderSVG}';">
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHTML(p.title)}</h3>
          ${starRow(p)}
          <div class="card-footer">${footerButton(p)}</div>
        </div>
      </article>
    `)
    .join("");

  grid.querySelectorAll(".copy-btn:not(.options-btn)").forEach((btn) => {
    btn.addEventListener("click", () => onCopyClick(btn));
  });

  grid.querySelectorAll(".options-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      onOptionsClick(btn);
    });
  });

  grid.querySelectorAll(".stars").forEach((starsEl) => {
    starsEl.querySelectorAll(".star").forEach((starBtn) => {
      starBtn.addEventListener("click", () => onStarClick(starsEl, starBtn));
    });
  });
}

const CARD_RATIO = 2 / 3;
const FILL_TOLERANCE = 0.25;

function fitImage(img) {
  if (!img.naturalWidth || !img.naturalHeight) return;
  const ratio = img.naturalWidth / img.naturalHeight;
  const closeEnough = Math.abs(ratio - CARD_RATIO) / CARD_RATIO <= FILL_TOLERANCE;
  img.classList.toggle("fill", closeEnough);
}

function imageStyle(p) {
  const rules = [];
  if (p.imageFit) rules.push(`object-fit:${p.imageFit}`);
  if (p.imagePosition) rules.push(`object-position:${p.imagePosition}`);
  return escapeHTML(rules.join(";"));
}

function footerButton(p) {
  if (p.options && p.options.length) {
    return `<button class="copy-btn options-btn" data-id="${p.id}" aria-haspopup="menu" aria-expanded="false">
      <span>${escapeHTML(p.optionsLabel || "Elegir opción")}</span>
      ${chevronIcon()}
    </button>`;
  }
  return `<button class="copy-btn" data-id="${p.id}" aria-label="Copiar prompt">
    ${clipboardIcon()}
    <span>Copiar</span>
  </button>`;
}

function textForOption(prompt, option) {
  if (option.text) return option.text;
  return prompt.text.split("{{OPCION}}").join(option.value || option.label);
}

let openMenu = null;

function closeMenu() {
  if (!openMenu) return;
  openMenu.menu.remove();
  openMenu.btn.setAttribute("aria-expanded", "false");
  openMenu = null;
}

function onOptionsClick(btn) {
  const wasOpenOnThis = openMenu && openMenu.btn === btn;
  closeMenu();
  if (wasOpenOnThis) return;

  const prompt = livePrompts.find((p) => p.id === Number(btn.dataset.id));
  if (!prompt) return;

  const menu = document.createElement("div");
  menu.className = "menu";
  menu.setAttribute("role", "menu");
  menu.innerHTML = prompt.options
    .map(
      (o, i) =>
        `<button type="button" class="menu-item" role="menuitem" data-index="${i}">${escapeHTML(o.label)}</button>`
    )
    .join("");
  document.body.appendChild(menu);

  const r = btn.getBoundingClientRect();
  const menuH = menu.offsetHeight;
  const menuW = menu.offsetWidth;
  const spaceBelow = window.innerHeight - r.bottom;
  const top = spaceBelow >= menuH + 12 ? r.bottom + 8 : Math.max(8, r.top - menuH - 8);
  const left = Math.min(Math.max(8, r.right - menuW), window.innerWidth - menuW - 8);
  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;

  btn.setAttribute("aria-expanded", "true");
  openMenu = { menu, btn };

  menu.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", async (e) => {
      e.stopPropagation();
      const option = prompt.options[Number(item.dataset.index)];
      await copyText(textForOption(prompt, option));
      closeMenu();
      showToast();
    });
  });
}

document.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
window.addEventListener("resize", closeMenu);
window.addEventListener("scroll", closeMenu, { passive: true });

function starRow(prompt) {
  const stars = [1, 2, 3, 4, 5]
    .map(
      (v) => `<button type="button" class="star${v <= prompt.rating ? " active" : ""}" data-value="${v}" aria-label="${v} estrellas">${starIcon()}</button>`
    )
    .join("");
  return `<div class="stars" data-id="${prompt.id}">${stars}</div>`;
}

function onStarClick(starsEl, starBtn) {
  const id = Number(starsEl.dataset.id);
  const clickedValue = Number(starBtn.dataset.value);
  const prompt = livePrompts.find((p) => p.id === id);
  if (!prompt) return;

  const newRating = prompt.rating === clickedValue ? 0 : clickedValue;
  prompt.rating = newRating;
  saveRatingOverride(id, newRating);
  renderGrid();
}

async function onCopyClick(btn) {
  const id = Number(btn.dataset.id);
  const item = livePrompts.find((p) => p.id === id);
  if (!item) return;

  await copyText(item.text);

  const label = btn.querySelector("span");
  const originalLabel = label.textContent;
  btn.classList.add("copied");
  label.textContent = "¡Copiado!";
  showToast();

  setTimeout(() => {
    btn.classList.remove("copied");
    label.textContent = originalLabel;
  }, 1500);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

function chevronIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => (toast.hidden = true), 200);
  }, 1400);
}

function clipboardIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="2" width="6" height="4" rx="1"></rect>
    <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"></path>
  </svg>`;
}

function starIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

async function onExportClick() {
  const rated = livePrompts.filter((p) => p.rating > 0);
  const lines = rated
    .sort((a, b) => a.id - b.id)
    .map((p) => `  ${p.id}: ${p.rating}, // ${p.title}`)
    .join("\n");
  const payload = `{\n${lines}\n}`;

  try {
    await navigator.clipboard.writeText(payload);
  } catch (err) {
    // ignore, nothing else we can do without clipboard access
  }
  showToast();
}

initPrompts(PROMPTS);
renderGrid();
document.getElementById("export-btn").addEventListener("click", onExportClick);
