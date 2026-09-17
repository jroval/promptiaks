function renderGrid(prompts) {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("count");
  countEl.textContent = prompts.length;

  const placeholderSVG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
      '<rect width="100%" height="100%" fill="#20202a"/>' +
      '<text x="50%" y="50%" fill="#55555f" font-size="18" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">Añade tu imagen</text>' +
      '</svg>'
    );

  grid.innerHTML = prompts
    .map((p, i) => `
      <article class="card" data-id="${p.id}" style="--delay: ${(i % 12) * 45}ms">
        <div class="card-image-wrap">
          <img src="${p.image}" alt="${escapeHTML(p.title)}"
               onerror="this.onerror=null;this.src='${placeholderSVG}';">
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHTML(p.title)}</h3>
          <div class="card-footer">
            <button class="copy-btn" data-id="${p.id}" aria-label="Copiar prompt">
              ${clipboardIcon()}
              <span>Copiar</span>
            </button>
          </div>
        </div>
      </article>
    `)
    .join("");

  grid.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => onCopyClick(btn, prompts));
  });
}

async function onCopyClick(btn, prompts) {
  const id = Number(btn.dataset.id);
  const item = prompts.find((p) => p.id === id);
  if (!item) return;

  try {
    await navigator.clipboard.writeText(item.text);
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = item.text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

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

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

renderGrid(PROMPTS);
