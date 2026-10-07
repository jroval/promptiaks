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
  rating: 0,
  title: "Anime estilo Ghibli",
  image: "images/prompt-01.webp",
  text: "Transform this photo into a Studio Ghibli style anime illustration..."
}
```

Para cada prompt:

1. Cambia `title` por un nombre corto que identifique el estilo.
2. Cambia `text` por el prompt completo (tal cual lo usas).
3. Guarda la imagen representativa en la carpeta `images/` con el nombre que
   indica `image` (por ejemplo `images/prompt-01.webp`). El formato usado es
   **WEBP cuadrado (1:1)**, ver recomendación más abajo.

`rating` es la puntuación por defecto (0 a 5 estrellas) que ve cualquiera que
entre a la web por primera vez — más abajo se explica cómo funciona.

No necesitas tocar `index.html`, `app.js` ni el CSS — la web se genera sola a
partir de ese archivo.

Si en el futuro necesitas más de 50 prompts, copia uno de los bloques
`{ ... }`, pégalo al final del array (antes del `];`) y súbele el `id`.

## Prompts con varias opciones (por ejemplo, distintos fondos)

Si un prompt tiene una parte que cambia, en lugar del botón "Copiar" la tarjeta
muestra un botón que despliega la lista de opciones; al elegir una, se copia el
prompt con esa opción aplicada.

```js
{
  id: 41,
  rating: 0,
  title: "Mejora de foto",
  image: "images/prompt-41.webp",
  optionsLabel: "Elegir fondo",
  text: `Mejora esta fotografía ... Fondo: {{OPCION}}. ...`,
  options: [
    { label: "Estudio gris", value: "estudio gris neutro" },
    { label: "Playa al atardecer", value: "playa al atardecer" },
    { label: "Prompt aparte", text: "Texto completo si esta opción no comparte base" }
  ]
}
```

- `text` lleva el prompt base y marca con `{{OPCION}}` el sitio donde entra cada opción.
- `label` es lo que se ve en el desplegable; `value` es lo que se inserta (si no hay `value`, se usa el `label`).
- Si una opción necesita un prompt totalmente distinto, usa `text` en esa opción y se copia tal cual.
- `optionsLabel` es el texto del botón (por defecto "Elegir opción").

## Crear las imágenes representativas

Las tarjetas tienen formato vertical **2:3**. Cualquier otra proporción (por
ejemplo las cuadradas 1:1) se muestra entera, sin recortar, con un fondo
difuminado del propio color de la imagen rellenando el espacio sobrante.

- **Formato recomendado**: 2:3 (por ejemplo 1000x1500 px), llena la tarjeta completa.
- **Resolución**: 1000–1500 px en el lado largo es suficiente; más pesa sin aportar nada.
- **Archivo**: WEBP (más ligero que JPG con la misma calidad visual).

### Ajustar el encuadre de una imagen concreta

Si una imagen tiene una proporción muy distinta (por ejemplo, muy alta y con
mucho espacio vacío) y no queda bien, se puede encuadrar a mano en su entrada de
`js/prompts.js`, sin tocar el archivo de imagen:

```js
imageFit: "cover",          // "cover" llena la tarjeta, "contain" la muestra entera
imagePosition: "50% 39%",   // qué parte se ve: horizontal vertical (0% = arriba/izquierda, 100% = abajo/derecha)
```

## Valoración por estrellas y orden de las tarjetas

Cada tarjeta tiene un selector de 1 a 5 estrellas. Las tarjetas se reordenan
automáticamente de mayor a menor puntuación — las de 5 estrellas suben
arriba del todo, las de 0 se quedan abajo.

Como esta web es estática (sin servidor ni base de datos), las estrellas que
pulses se guardan en el `localStorage` de tu propio navegador. Esto significa:

- En tu ordenador, tus valoraciones se recuerdan aunque cierres y vuelvas a
  abrir la página.
- Si abres la web en otro navegador o dispositivo, o si en el futuro la
  publicas para que otras personas la vean, cada visitante parte de cero y
  solo ve sus propias valoraciones — el orden que tú decidiste no se ve
  reflejado automáticamente para ellos.

Para que el orden que tú elijas sea el que vea todo el mundo (por ejemplo,
antes de publicarla), usa el enlace **"Exportar valoraciones"** al pie de la
página: copia al portapapeles un bloque con los `id` y la puntuación de cada
prompt que hayas valorado. Pégamelo (o pégalo tú directamente) para
actualizar el campo `rating` de cada entrada en `js/prompts.js` — desde ese
momento, ese orden queda fijo como el que ve cualquiera que entre por
primera vez.

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

### Sobre la privacidad

GitHub Pages publica la web en una URL pública accesible por cualquiera que
la conozca (no aparece en buscadores por el `<meta name="robots" content="noindex">`
que ya incluye `index.html`, pero no está protegida por contraseña). Si el
repositorio es privado y tu cuenta es gratuita, GitHub Pages seguirá
generando una URL pública igualmente. Para que la página en sí requiera
login, necesitarías GitHub Pro/Team/Enterprise con la opción de "Private
Pages", o bien no usar GitHub Pages y alojarla en otro sitio con auth. Si
solo quieres evitar que aparezca en buscadores y que nadie la encuentre por
casualidad, esta configuración ya es suficiente.
