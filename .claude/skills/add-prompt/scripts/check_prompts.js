// Valida js/prompts.js: que carga, ids únicos y que existen las imágenes
// de los prompts ya rellenos. Uso: node check_prompts.js (desde la raíz del proyecto)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const file = path.join(root, "js", "prompts.js");

let prompts;
try {
  const ctx = {};
  vm.runInNewContext(fs.readFileSync(file, "utf8") + "\nthis.PROMPTS = PROMPTS;", ctx);
  prompts = ctx.PROMPTS;
} catch (err) {
  console.error("ERROR: js/prompts.js no carga: " + err.message);
  process.exit(1);
}

const isPlaceholder = (p) => /^Pega aqui el texto completo/.test(p.text || "");
const errors = [];
const seen = new Set();

for (const p of prompts) {
  if (seen.has(p.id)) errors.push(`id ${p.id} repetido`);
  seen.add(p.id);
  const hasOptions = Array.isArray(p.options) && p.options.length > 0;
  if (!p.title || !p.image) errors.push(`id ${p.id}: falta title o image`);
  if (!p.text && !(hasOptions && p.options.every((o) => o.text))) {
    errors.push(`id ${p.id}: falta text (o text en cada opción)`);
  }
  if (!isPlaceholder(p) && p.image && !fs.existsSync(path.join(root, p.image))) {
    errors.push(`id ${p.id} (${p.title}): no existe ${p.image}`);
  }
  if (p.text && p.text.includes("{{OPCION}}") && !Array.isArray(p.options)) {
    errors.push(`id ${p.id}: usa {{OPCION}} pero no tiene options`);
  }
}

const filled = prompts.filter((p) => !isPlaceholder(p)).length;
if (errors.length) {
  errors.forEach((e) => console.error("ERROR: " + e));
  process.exit(1);
}
console.log(`OK: ${prompts.length} entradas, ${filled} rellenas, ${prompts.length - filled} huecos libres`);
