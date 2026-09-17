# Mis Prompts de Estilo

Galería personal para guardar prompts de transformación de estilo de imágenes,
con una imagen representativa por prompt y un botón para copiarlo al portapapeles.

## Cómo añadir/editar tus prompts

Todo el contenido vive en un único archivo: [`js/prompts.js`](js/prompts.js).

Ya tiene **50 huecos preparados** (`id` 1 a 50) aunque de momento solo uses
38 — así tienes sitio de sobra para ir añadiendo nuevos sin tocar la
estructura. Los que no rellenes se quedan como placeholder y no rompen nada;
puedes borrarlos si quieres, o dejarlos para más adelante.

Cada prompt es un objeto así:

```js
{
  id: 1,
  title: "Anime estilo Ghibli",
  image: "images/prompt-01.jpg",
  text: "Transform this photo into a Studio Ghibli style anime illustration..."
}
```

Para cada uno de los 28:

1. Cambia `title` por un nombre corto que identifique el estilo.
2. Cambia `text` por el prompt completo (tal cual lo usas).
3. Guarda la imagen representativa en la carpeta `images/` con el nombre que
   indica `image` (por ejemplo `images/prompt-01.jpg`). Puede ser `.jpg`,
   `.png` o `.webp` (solo actualiza la extensión en ese campo).

No necesitas tocar `index.html`, `app.js` ni el CSS — la web se genera sola a
partir de ese archivo.

Si en el futuro quieres añadir un prompt 29, copia uno de los bloques
`{ ... }`, pégalo al final del array (antes del `];`) y súbele el `id`.

## Ver la web en tu ordenador antes de subirla

Abrir `index.html` directamente con doble clic funciona en la mayoría de
navegadores. Si las imágenes no cargan por restricciones del navegador al
abrir archivos locales, levanta un servidor simple desde esta carpeta:

```bash
npx serve .
```

y abre la URL que te indique en la terminal.

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Galería inicial de prompts"
git branch -M main
git remote add origin <URL-DE-TU-REPO>
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Source → Deploy from a branch →
main / (root)** y guarda. En un par de minutos tu web estará en
`https://<tu-usuario>.github.io/<nombre-repo>/`.

### ⚠️ Sobre la privacidad

GitHub Pages publica la web en una URL pública accesible por cualquiera que
la conozca (no aparece en buscadores por el `<meta name="robots" content="noindex">`
que ya incluye `index.html`, pero no está protegida por contraseña). Si el
repositorio es privado y tu cuenta es gratuita, GitHub Pages seguirá
generando una URL pública igualmente. Para que la página en sí requiera
login, necesitarías GitHub Pro/Team/Enterprise con la opción de "Private
Pages", o bien no usar GitHub Pages y alojarla en otro sitio con auth. Si
solo quieres evitar que aparezca en buscadores y que nadie la encuentre por
casualidad, esta configuración ya es suficiente.
