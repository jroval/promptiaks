---
name: add-prompt
description: Añade un prompt nuevo a la galería (js/prompts.js) con su imagen representativa convertida a WEBP en images/, y lo deja listo para commit. Úsala cuando el usuario quiera añadir, guardar o subir un prompt de estilo nuevo.
disable-model-invocation: true
argument-hint: "[título] [ruta-a-la-imagen]"
---

# Añadir un prompt a la galería

Argumentos recibidos: $ARGUMENTS

Toda la galería se genera a partir de `js/prompts.js`. No toques `index.html`, `js/app.js` ni `css/styles.css`.

## 1. Reunir los datos

Necesitas tres cosas. Pide al usuario lo que falte y no te inventes nada:

- **Título**: un nombre corto del estilo, por ejemplo "Arcane Style".
- **Texto del prompt**: el prompt completo, tal cual. No lo traduzcas, no lo corrijas y no lo resumas.
- **Imagen**: la ruta de la imagen original (PNG, JPG o WEBP).

Si el prompt tiene una parte variable (por ejemplo distintos fondos), pide también las opciones. Consulta la sección "Prompts con varias opciones" de `README.md` para el formato (`{{OPCION}}`, `options`, `optionsLabel`).

## 2. Elegir el hueco

`js/prompts.js` tiene huecos vacíos al final del array. Se reconocen porque su título empieza por `"Prompt NN - (pon aqui el nombre del estilo)"` y su texto empieza por `Pega aqui el texto completo`.

- Usa **el primer hueco vacío** (el `id` más bajo) y conserva su `id` y su `image` (`images/prompt-NN.webp`, con NN de dos cifras).
- Si no queda ningún hueco, añade un bloque nuevo al final del array, antes de `];`, con `id` = el máximo + 1 e `image: "images/prompt-NN.webp"`.

## 3. Convertir la imagen

```bash
python .claude/skills/add-prompt/scripts/convert_image.py "<imagen-original>" images/prompt-NN.webp
```

El script la reduce a 1500 px de lado largo como máximo, la guarda en WEBP y dice si la proporción no es 2:3. No recorta nada.

Si avisa de que la proporción está lejos de 2:3, díselo al usuario. La tarjeta la mostrará entera con un fondo difuminado. Si la quiere llenando la tarjeta, añade `imageFit: "cover"` e `imagePosition: "50% 30%"` (ajustando el porcentaje vertical) a la entrada, como en el prompt de `js/prompts.js` que ya los usa.

## 4. Rellenar la entrada

Sustituye el hueco por:

```js
  {
    id: NN,
    rating: 0,
    title: "<Título>",
    image: "images/prompt-NN.webp",
    text: `<texto del prompt>`
  },
```

- El texto va entre comillas invertidas. Si contiene `` ` `` o `${`, escápalos como `` \` `` y `\${`.
- Respeta la sangría de dos espacios y las comas entre bloques. El último bloque del array no lleva coma.
- Deja `rating: 0` salvo que el usuario diga otra cosa.

## 5. Comprobar

```bash
node .claude/skills/add-prompt/scripts/check_prompts.js
```

Comprueba que el archivo carga, que no hay `id` repetidos y que existen las imágenes de los prompts ya rellenos. Corrige cualquier error antes de seguir.

Si el usuario quiere verlo, arranca la vista previa `promptiaks-static` de `.claude/launch.json` y busca la tarjeta nueva.

## 6. Commit

Pregunta al usuario antes de hacer commit. El mensaje va en español, en imperativo y sin tilde en "imagenes", como los anteriores:

```
Añade prompt <Título> con su imagen
```

Incluye solo `js/prompts.js` y la imagen nueva. No hagas push salvo que te lo pida.
