const PROMPTS = [
  {
    id: 1,
    rating: 0,
    title: "Rotulador",
    image: "images/prompt-01.webp",
    text: `Transform the person in the image into a hand-drawn illustration with a marker rendering style, preserving 100% of their identity including exact facial features, proportions, expression, hairstyle, pose and body structure, do not alter or reinterpret the person in any way, only restyle visually, use bold black outlines with thick contour lines, visible marker strokes and slight irregularities to simulate a handmade effect, apply vibrant saturated colors with subtle natural shading created through marker layering, keep details minimal but expressive focusing on key facial features, clean stylized simplification without losing recognizability, matte paper-like finish with slight texture, ensure the drawing looks like it was colored with real markers, background must be completely pure white with no gradients, shadows or additional elements, isolate the subject cleanly and remove anything else from the scene`
  },
  {
    id: 2,
    rating: 0,
    title: "Alcohol Rotu",
    image: "images/prompt-02.webp",
    text: `Transform only the person in the uploaded image into a premium alcohol-marker illustration while preserving the exact identity, facial structure, expression, hairstyle, hair color, body proportions, pose, clothing, accessories and overall silhouette with extremely high fidelity, do not alter the composition or framing, replace the entire background with a pure white seamless background (#FFFFFF), isolate the subject completely, authentic hand-rendered alcohol-marker artwork aesthetic, bold black contour lines with natural hand-drawn variation and slightly imperfect organic edges, confident illustrator linework with varied line weight, clean graphic shapes and simplified forms, colors built using multiple transparent marker layers stacked over one another, visible marker stroke direction following the contours of the face, body and clothing, smooth marker fills created through overlapping passes rather than digital gradients, large simplified shadow masses instead of realistic rendering, warm skin tones constructed from layered peach, terracotta, sienna and muted red marker colors, deep shadows created with broad marker fills and subtle color layering, highlights preserved as untouched white paper areas on the forehead, nose bridge, cheeks, lips and chin, expressive stylized facial planes, graphic treatment of light and shadow, detailed hair rendered as grouped shapes with layered marker strokes and selective highlight gaps, strong contrast between outlines and color fills, contemporary sketchbook illustration aesthetic, professional illustrator portfolio quality, matte traditional media appearance, minimal paper texture, almost imperceptible grain, clean marker blending, no rough paper texture, no canvas texture, no watercolor texture, no pencil texture, no ink splatter, no digital noise overlay, no photorealism, no airbrush shading, no soft digital painting effects, no glossy CGI rendering, no 3D appearance, no comic book effects, no manga screentones, no speed lines, no speech bubbles, no captions, no text, no logos, no watermark, premium handcrafted marker illustration with rich layered colors, simplified graphic shadows and authentic professional alcohol-marker rendering, isolated subject on pure white background.`
  },
  {
    id: 3,
    rating: 0,
    title: "Línea en Blanco y Negro",
    image: "images/prompt-03.webp",
    text: `Transform the photo into a clean cartoon line art illustration with bold uniform black outlines, simplified shapes and rounded contours, outer contour line noticeably thicker than all interior lines, interior details drawn with thinner smooth continuous strokes, no shading no color and no textures, expressive cartoon facial features with slightly exaggerated proportions, preserve the original pose and composition of the person but convert everything into flat outlined cartoon forms, isolate only the person with no background at all, high detail in the line work while keeping it clean and clear`
  },
  {
    id: 4,
    rating: 0,
    title: "Cartoon 3D Render",
    image: "images/prompt-04.webp",
    text: `A highly stylized 3D caricature of this Character, with expressive facial features, and playful exaggeration. Rendered in a smooth, polished style with clean materials and soft ambient lighting. white background`
  },
  {
    id: 5,
    rating: 0,
    title: "Western Comic",
    image: "images/prompt-05.webp",
    text: `Use the uploaded image as the main reference and transform it into a stylized gritty western comic illustration, it is critical to preserve 100% of the original identity including facial structure, expression, gaze, proportions, hairstyle, hair color, clothing and all details exactly as they are, do not modify, replace or reinterpret any element of the subject, maintain the exact pose, body position, camera angle and composition from the original image, completely remove the original background and eliminate any secondary elements or people so that only the main subject remains, replace the background with a clean light neutral base, convert the rendering into a high quality comic illustration with strong ink lines, expressive brush strokes and painterly shading, apply a limited color palette with bold contrast and dramatic lighting, enhance shadows and highlights to create depth and intensity, add subtle texture to simulate traditional painting or ink on paper, cinematic composition, semi realistic comic style, ultra detailed, sharp focus, gritty atmosphere, no text, no logos, no watermark`
  },
  {
    id: 6,
    rating: 0,
    title: "Cartoon 3D Disney Render",
    image: "images/prompt-06.webp",
    text: `Transform the attached character into a high-quality 3D Disney-style character while
STRICTLY preserving the original face identity.
Maintain the same facial structure, bone proportions, eye shape, nose size, lip shape, jawline, cheekbones, skin tone, facial symmetry, and unique facial details from the original image.
No face redesign, no beautification, no generic Disney face — the character must be instantly recognizable as the same person, only translated into a Disney/Pixar 3D style.
Style inspired by modern Disney & Pixar animation - soft rounded geometry, expressive eyes (same shape and distance), smooth cinematic skin shading, subtle stylization without distortion., Rendered in cinematic 3D, global illumination, soft studio lighting, shallow depth of fiela, ultra-clean textures, premium teature-film quality (Pixar / Disney level). Background: white luminous.Ultra-high resolution, sharp focus, professional animation-movie render.`
  },
  {
    id: 7,
    rating: 0,
    title: "Comic Disney",
    image: "images/prompt-07.webp",
    text: `Transform the uploaded image into a high-quality Disney-style princess illustration, STRICTLY preserve the subject exactly as in the original image with 100% fidelity in facial identity, facial features, expression, body proportions, pose, hairstyle structure, clothing design and overall composition, do not alter anatomy, attractiveness or recognizability, do not reinterpret the person, do not change or redesign the outfit in any way, keep the exact same clothing, only translate the visual rendering style, render the character in a classic Disney princess aesthetic with soft elegant linework, smooth clean contours, refined and slightly stylized facial features while keeping true likeness, large expressive eyes adapted to Disney style but maintaining original eye shape and identity, soft luminous skin with subtle gradients and gentle blush tones, silky flowing hair with defined strands and glossy highlights while preserving the exact hairstyle structure, clothing must remain identical in design, structure, fit and details but translated into a polished stylized Disney rendering with soft shading and subtle highlights, enhance lighting with a magical soft glow and subtle rim light, polished cinematic finish, high detail, clean and premium illustration quality, pure white background with no additional elements or textures, no shadows or environment, focus entirely on the character, studio-like isolation, 4k resolution, ultra clean finish`
  },
  {
    id: 8,
    rating: 0,
    title: "Cartoon 3D",
    image: "images/prompt-08.webp",
    text: `A painterly cartoon combining sculpted 3D anatomy with hand-painted illustration textures, spider-verse inspired visual language, distorted facial geometry and expressive asymmetry, intentionally breaking realism while preserving general identity cues such as skin tone and hairstyle, bold line work mixed with painted shadows, halftone textures and color splashes, graphic animated illustration aesthetic, white solid studio background, frontal expressive pose, stylized lighting translated into brush-painted highlights, dynamic composition, rich paint texture and high-end hybrid cartoon render, format 2:3`
  },
  {
    id: 9,
    rating: 0,
    title: "Wallpaper GTA V",
    image: "images/prompt-09.webp",
    text: `Usando la imagen adjunta como referencia principal, recrear la escena como un wallpaper en formato 16:9, resolución alta tipo 4K, reinterpretada en estilo artístico GTA V, ilustración digital con estética de póster promocional, colores vibrantes y saturados pero bien equilibrados, contornos definidos con líneas limpias y marcadas, sombreado suave tipo cel-shading con volumen realista, iluminación cinematográfica californiana, alto contraste y claridad, textura pictórica pulida, atmósfera urbana moderna, composición dinámica y centrada, acabado profesional tipo artwork oficial de videojuego,sin textos ni logos, fondo adaptado para encuadre panorámico sin perder al personaje principal, look icónico, potente y visualmente impactante.`
  },
  {
    id: 10,
    rating: 0,
    title: "Pokémon",
    image: "images/prompt-10.webp",
    text: `Transform the person into a classic late-90s to early-2000s creature-collector anime style illustration with the soft colorful aesthetic of vintage adventure anime series, preserve the original person fully recognizable with the same facial structure, hairstyle, expression, body proportions and pose, adapt the real person naturally into the anime style without changing identity, use simple clean lineart, flat cel shading with soft gradients, rounded facial features, large expressive anime eyes while maintaining the original eye shape and personality, smooth skin tones, minimal realistic texture, bright cheerful color palette, stylized but natural hair with clean chunky strands and sharp anime highlights, classic TV anime rendering quality, preserve the original outfit and silhouette exactly as in the source image, maintain the exact same pose and camera framing, no extra accessories, no jewelry, no animals, no creatures, no companions, no futuristic elements, no dramatic cinematic lighting, isolated character only, seamless pure white background, no scenery, no trees, no foliage, no environmental elements, no props, clean studio-style composition, clean white outlines avoided, authentic old-school anime composition, polished but simple cel animation aesthetic, no text, no logos, no watermark, maintain a friendly adventurous vibe, highly recognizable identity as top priority, classic handheld-monster-anime visual style without realism, smooth and clean anime finish`
  },
  {
    id: 11,
    rating: 0,
    title: "Pokémon (Carta Fondo Holográfico)",
    image: "images/prompt-11.webp",
    text: `Transform the person and their dog from the reference image into a classic late-1990s to early-2000s creature-collector anime-style illustration, using the soft, colorful and adventurous aesthetic of vintage Japanese monster-training television anime.
Preserve both subjects as the absolute priority.
Keep the person fully recognizable, maintaining the same facial structure, hairstyle, expression, apparent age, skin tone, body proportions, pose, clothing, accessories and overall silhouette from the original photograph. Adapt the real person naturally into the anime style without changing their identity. Use clean and simple linework, rounded facial features, large expressive anime eyes that still preserve the original eye shape and personality, flat cel shading with subtle soft gradients, smooth skin tones and minimal realistic texture.
Preserve the dog faithfully and make it clearly recognizable as the same animal. Maintain its exact breed, facial structure, muzzle, ears, eye shape, coat color, markings, body proportions, expression, pose, collar, harness or leash when visible. Do not turn the dog into a fantasy creature or alter its anatomy. Translate its real appearance naturally into the same classic anime style, using clean outlines, simplified fur shapes, soft cel shading and expressive but accurate facial features.
Keep the original interaction and emotional connection between the person and the dog. They should feel like an experienced trainer and their loyal main companion, while remaining completely faithful to the reference image. Preserve the original pose and general composition whenever possible, adapting only what is necessary to create a polished illustrated scene.
Place both characters inside an elaborate holographic background inspired by ultra-rare special creature-collector trading cards. Create a vibrant full-art composition with flowing iridescent energy, rainbow foil reflections, translucent light waves, prismatic sparkles, glowing particles, subtle starbursts, curved energy trails and layered holographic textures. Use elegant flashes of cyan, electric blue, violet, magenta, gold and pearlescent white, balanced so the characters remain clearly visible.
The background should feel magical, premium and collectible, with dynamic light effects surrounding both subjects and subtly connecting them. Add soft luminous halos, shimmering foil patterns and controlled energy effects behind the silhouettes, without covering their faces or important identifying features.
Use authentic old-school television anime rendering combined with the luxurious finish of a modern ultra-rare full-art trading card. Bright, cheerful and adventurous color palette, clean chunky hair strands, sharp anime highlights, polished cel animation aesthetic, soft cinematic glow and refined holographic depth.
Full-art illustration only. No card frame, no borders, no title, no character names, no statistics, no symbols, no interface elements, no logos, no watermark and no readable text. No additional animals, creatures, companions or people. Do not change the person's outfit. Do not add fantasy costumes, futuristic accessories or unnecessary objects. Do not replace or redesign the dog. Maintain highly recognizable identities, correct anatomy, natural proportions and a strong emotional bond between the person and their dog. format 3:4`
  },
  {
    id: 12,
    rating: 0,
    title: "Comic Estilo Jim Lee",
    image: "images/prompt-12.webp",
    text: `Transform the person in the image into a high-end realistic American comic book style, with strong anatomy, dynamic shading, and a clean editorial illustration finish, preserving the subject's identity exactly without any alterations, keeping the face, expression, pose, and all facial and body features precisely the same, clean inking lines with varied line weight, dramatic lighting with well-defined shadows, solid and slightly saturated colors with smooth gradients, polished yet natural-looking skin, completely remove the original background and replace it with a pure white background, no frames, no borders, no panels, no text, no additional effects, centered composition focused on the character, high detail, professional modern comic style suitable for cover or splash art`
  },
  {
    id: 13,
    rating: 0,
    title: "Comic Clásico",
    image: "images/prompt-13.webp",
    text: `Use the uploaded image as the main reference and transform it into a high quality comic illustration, it is critical to preserve 100% of the original identity including facial structure, expression, gaze, proportions, hairstyle, hair color, clothing and all details exactly as they are, do not modify, replace or reinterpret any element of the subject, maintain the exact pose, body position, camera angle and composition from the original image, completely remove the original background and eliminate any secondary elements or people so that only the main subject remains, replace the background with a clean pure white or very soft off-white background, convert the rendering into a detailed comic style with strong ink lines, clean linework, smooth color fills and subtle painterly shading, balanced contrast and soft controlled lighting, enhance shadows and highlights to create depth while keeping a polished and editorial look, minimal texture, semi realistic comic rendering, ultra detailed, sharp focus, centered composition with breathing space around the subject, no text, no logos, no watermark`
  },
  {
    id: 14,
    rating: 0,
    title: "Comic Realista (Mike Hawkthorne)",
    image: "images/prompt-14.webp",
    text: `Transform the image into a modern realistic comic illustration with a strong cinematic narrative style, preserving the person exactly as they appear in the original photo without altering facial structure, identity, expression, pose, body proportions, hairstyle or clothing, the character must remain fully recognizable and identical, apply a semi-realistic comic rendering with clean but expressive linework, subtle ink definition and refined contours, incorporate cinematic lighting with directional light and soft shadows to create depth and volume, use realistic skin tones with slightly enhanced contrast and gentle texturing to avoid a plastic look, add nuanced shading that emphasizes facial features, muscles and fabric folds without exaggeration, maintain a grounded and believable anatomy while slightly stylizing for visual impact, color grading should feel like a film still with balanced tones, soft highlights and controlled contrast, avoid overly saturated or cartoonish colors, enhance depth through light and shadow rather than outlines alone, ensure a polished, modern comic finish with a narrative feel as if it were a frame from a cinematic graphic novel, remove the original background completely and replace it with a clean solid white background that enhances the subject without distractions, no additional elements or objects should be present, focus entirely on the character with a professional, editorial and cinematic composition.`
  },
  {
    id: 15,
    rating: 0,
    title: "Comic Estilo Invincible",
    image: "images/prompt-15.webp",
    text: `Transform the uploaded image into a clean premium western adult-animation illustration while preserving the exact identity, facial structure, hairstyle, expression, anatomy, clothing silhouette, pose, proportions and overall composition of the original subject with extremely high fidelity, adapt the character into a polished modern superhero animated-series aesthetic inspired by mature western comic animation, simplified geometric facial construction, sharp angular jawlines, expressive but minimal facial features, clean ultra-precise black lineart with varied line weight, flat cel-shaded rendering with 2–3 tone shadow separation, large graphic shadow shapes, minimal soft blending, controlled color palette with slightly muted saturation, elegant comic-book realism, streamlined anatomy with broad shoulders and heroic proportions where appropriate, smooth simplified musculature, subtle cheek and neck contour lines, minimal wrinkle detailing, highly readable silhouette design, modern broadcast-animation production quality, crisp vector-like finish, subtle painterly touch only in shadow transitions, clean eyes with small reflective highlights, simplified hair rendering using grouped shadow masses and sharp highlights, premium animated television aesthetic, dynamic but restrained comic shading, ultra-clean edges, no sketch texture, no photorealism, no anime influence, no 3D rendering, no exaggerated caricature distortion, preserve the original framing and stance exactly, isolated character on a pure white seamless background, centered composition, no environment, no extra props unless already present in the source image, no text, no captions, no speech bubbles, no logos, no watermark, full-body presentation, professional character turnaround feel, high detail, studio-quality western animated character design sheet aesthetic, polished modern comic-animation finish, masterpiece quality`
  },
  {
    id: 16,
    rating: 0,
    title: "Comic Across the Spider-Verse",
    image: "images/prompt-16.webp",
    text: `Transform the image into a highly stylized comic illustration with a bold, multi-layered graphic aesthetic, preserving the person exactly as they appear in the original photo without altering facial structure, identity, expression, pose, body proportions, hairstyle or clothing, the character must remain fully recognizable and identical, apply a dynamic comic rendering that blends clean linework with painterly textures and visible brush strokes, incorporate vibrant and contrasting color layers with intentional color separation, using neon accents, halftone patterns, ink textures and subtle misregistration effects to create a dimensional comic print look, lighting should be dramatic and stylized with strong color contrast, mixing warm and cool tones across the face and body, shadows should include graphic shapes and color blocks instead of purely realistic shading, enhance depth using overlapping color passes and texture rather than smooth gradients, include subtle glitch-like offsets and layered outlines to give a sense of motion and energy, skin rendering should balance realism with stylization, avoiding plastic smoothness and instead using textured, expressive color transitions, maintain a cinematic composition with a sense of movement and attitude, as if captured from an animated graphic sequence, remove the original background completely and replace it with a clean solid white background that enhances the subject without distractions, no additional elements or objects should be present, focus entirely on the character with a bold, modern, high-energy comic finish`
  },
  {
    id: 17,
    rating: 0,
    title: "Comic What If",
    image: "images/prompt-17.webp",
    text: `Transform the image into a stylized semi-realistic animated comic illustration with a clean and polished 3D-inspired look, preserving the person exactly as they appear in the original photo without altering facial structure, identity, expression, pose, body proportions, hairstyle or clothing, the character must remain fully recognizable and identical, apply smooth and controlled shading with simplified volumes and clear light direction, avoiding excessive texture or noise, skin rendering should be clean and slightly stylized with soft gradients and subtle highlights, maintaining a natural but refined finish, use sharp and well-defined edges combined with minimal but precise linework to enhance contours, lighting should be cinematic and directional with strong highlights and soft shadow transitions, giving a slightly dramatic but controlled look, colors should be rich and balanced, slightly saturated but not exaggerated, with a modern digital animation feel, materials such as skin and fabric should appear smooth and slightly glossy without becoming overly reflective, overall rendering should feel like a high-quality animated frame with a blend of realism and stylization, maintaining depth and clarity while simplifying fine details, remove the original background completely and replace it with a clean solid white background that enhances the subject without distractions, no additional elements or objects should be present, focus entirely on the character with a professional, cinematic animated comic finish`
  },
  {
    id: 18,
    rating: 0,
    title: "Comic Retro Pop",
    image: "images/prompt-18.webp",
    text: `Transform the uploaded image into a retro pop illustration style while strictly preserving the subject exactly as it is, do not alter identity, face, body proportions, pose, clothing, hairstyle or any physical feature, the subject must remain 1:1 identical to the original image in structure and appearance, only change the visual treatment and rendering style, apply a bold retro pop aesthetic inspired by vintage poster art and 80s pop graphics, use clean defined outlines and simplified color blocking, introduce flat vibrant colors with high contrast and limited palette, add subtle halftone dot textures only in shading areas without distorting the original shapes, enhance edges and contours to feel graphic and punchy, reduce gradients and replace them with solid color transitions where possible while respecting original forms, keep skin tones stylized but consistent with the original, hair must remain identical in shape and flow with added graphic highlights, clothing must remain identical with simplified retro color treatment and minimal shading, background must be completely replaced with a flat solid or geometric pop-style color composition that strongly contrasts with the subject, use bold shapes or color blocks if desired but keep them clean and minimal, no environment, no depth clutter, no additional elements, no redesign, no pose change, final result should feel like a vintage pop poster version of the original image, bold, graphic, colorful, clean and visually striking while the character remains completely unchanged`
  },
  {
    id: 19,
    rating: 0,
    title: "Comic High Glossy",
    image: "images/prompt-19.webp",
    text: `Transform the uploaded image into a high-end glossy editorial illustration while strictly preserving the subject exactly as it is, do not alter identity, face, body proportions, pose, clothing, hairstyle or any physical feature, the subject must remain 1:1 identical to the original image in structure and appearance, only enhance the rendering style, improve lighting, clarity and surface finish, apply a sleek polished look with ultra-clean linework and smooth controlled shading, introduce subtle cel-style shadows and refined highlights without modifying shapes, add soft glossy reflections on skin and clothing to create a premium finish while maintaining original colors and materials, enhance contrast and sharpness to give a more striking and professional look, keep all anatomical details and positioning untouched, no reinterpretation of pose or design, hair must remain identical in shape and flow with only enhanced shine, clothing must remain identical with only improved texture and light response, background must be completely replaced with a flat solid color that strongly contrasts with the subject to make it stand out, no gradients unless extremely subtle, no textures, no environment, no additional elements, no objects, no redesign, no stylization that changes structure, only visual enhancement and polish, final result should feel like a clean glossy editorial upgrade of the original image, sharp, modern, minimal, visually striking and highly refined without altering the subject itself`
  },
  {
    id: 20,
    rating: 0,
    title: "Comic Anime Editorial",
    image: "images/prompt-20.webp",
    text: `Transform the uploaded image into a high-impact stylized anime editorial pin-up illustration, STRICTLY preserve the subject exactly as in the original image without any alteration, maintain 100% accuracy in face, identity, facial features, expression, body proportions, pose, clothing, hairstyle and overall structure, do not reinterpret anatomy or modify attractiveness, do not idealize or exaggerate body shape, do not change pose or framing, the person must remain identical in every physical aspect, only translate the visual rendering style, convert the image into a sleek contemporary anime-comic illustration using crisp clean black linework, ultra-smooth cel shading, controlled color blocking and glossy specular highlights, apply a polished digital finish with sharp edges and graphic contrast while respecting the original forms, hair must keep the exact shape and structure but rendered with stylized highlight bands, skin must maintain original tone and features but rendered with smooth stylized shading and subtle reflective accents, clothing must remain identical in design and fit but translated into simplified stylized rendering with clean folds and controlled highlights, keep the subject as the absolute focal point using the exact original composition (full body or three-quarter depending on source), background WHITE, no scenery, no objects, no texture, no depth clutter, no gradients unless extremely subtle, ensure perfect silhouette readability, maintain a refined modern anime illustration look mixing fashion editorial polish and graphic character art, ultra clean rendering, vibrant but controlled palette, high contrast, sharp focus, no realism, no painterly brushstrokes, no sketch lines, no photographic texture, no added elements, no text, no watermark, no extra characters, masterpiece quality, visually striking, sleek, polished, bold, iconic character poster`
  },
  {
    id: 21,
    rating: 0,
    title: "Ilustración Digital Figurativa",
    image: "images/prompt-21.webp",
    text: `Transform only the person in the uploaded image while preserving with maximum fidelity their identity, facial features, expression, hairstyle, hair color, anatomy, body proportions, pose, clothing and original framing, without altering any structural elements or inventing new details, convert the subject into a contemporary figurative digital illustration with a clean, stylized and premium finish, modern editorial aesthetics and sophisticated concept art style, realistic but simplified anatomy without hyperrealism, soft refined linework integrated into the color without harsh black outlines, smooth and polished shading with natural diffused lighting, avoiding strong contrast and dramatic shadows, harmonious slightly desaturated color palette with balanced tones and subtle accents, clothing rendered with clear volumes and simplified folds without excessive photographic texture, smooth digital painting with no visible brush strokes, elegant high-end publishable quality, fully preserve the original pose and personality of the image, completely remove the original environment and every background element, leaving a pure solid white background (#FFFFFF), perfectly clean, empty and uniform, with no ambient shadows, no gradients, no textures and no additional objects, modify exclusively the person.`
  },
  {
    id: 22,
    rating: 0,
    title: "Funko Pop",
    image: "images/prompt-22.webp",
    text: `Turn the subject in the reference image into an authentic Funko Pop-style vinyl figure. Oversized square head, very slim body with short stubby arms and legs, tiny hands and feet. Smooth matte vinyl texture, large round black eyes, no mouth. Match the subject's hairstyle, skin tone, clothing, accessories, and pose, simplified into molded vinyl shapes.
Chibi proportions, collectible toy aesthetic. Full body visible, centered on a pure white background with studio lighting, sharp focus, high-quality 4K render.`
  },
  {
    id: 23,
    rating: 0,
    title: "Cartoon Molón",
    image: "images/prompt-23.webp",
    text: `Transform the person in the reference photo into a vibrant, polished cartoon character while preserving their identity with maximum accuracy.
The person must remain immediately recognizable as the exact same individual. Facial identity is the highest priority. Preserve the precise facial structure, head shape, forehead, eyebrows, eye shape, eye spacing, eyelids, nose shape, nostrils, cheekbones, cheeks, lips, jawline, chin, ears, skin tone, apparent age, hairstyle, hairline, facial hair if present, and every distinctive or asymmetrical facial feature visible in the original photograph.
Do not create a generic cartoon face. Do not beautify, idealize, rejuvenate, exaggerate, caricature, or reinterpret the subject's facial features. Do not enlarge the eyes excessively, alter the nose, sharpen the jawline, change the smile, modify the expression, smooth away identifying details, or replace the face with a different-looking character. The stylization must adapt to the real face rather than forcing the face into a predetermined cartoon template.
Maintain the exact original facial expression, gaze direction, head angle, pose, posture, body proportions, anatomy, silhouette, hand position, leg position, and camera perspective. Preserve the natural proportions between the head and body.
Keep the original clothing, shoes, accessories, hairstyle, and visible physical features completely unchanged. Reproduce every garment accurately, including its exact shape, fit, length, colors, seams, textures, folds, patterns, prints, logos, laces, fasteners, and small details. Do not replace, redesign, simplify, remove, or add any clothing element or accessory.
Render the subject in a sophisticated modern cartoon and comic-book aesthetic with clean black outlines, expressive but anatomically accurate facial features, carefully stylized hands and feet, bold playful colors, crisp cel shading, controlled high contrast, dynamic confident energy, and polished cinematic lighting.
Use detailed facial linework and subtle tonal variation to preserve likeness. Keep the skin texture simplified enough to feel illustrated, but retain all identity-defining features. The final result should look like a faithful cartoon version of the real person, not a loosely inspired character.
Full-body composition matching the original photograph, high resolution, sharp professional finish, seamless pure white background, no scenery, no props, no additional people, no added accessories, no text, no border, no watermark.`
  },
  {
    id: 24,
    rating: 0,
    title: "Cartoon Elegante Estilizado",
    image: "images/prompt-24.webp",
    text: `Transform only the person in the uploaded image into an elegant stylized character illustration inspired by contemporary animated feature films, preserve the exact identity, facial structure, expression, hairstyle, hair color, body proportions, pose, clothing silhouette and overall composition with the highest possible fidelity, reinterpret the subject using refined character-design principles while keeping them instantly recognizable, large expressive almond-shaped eyes, subtly enlarged and highly appealing eye design, graceful facial simplification, smooth stylized anatomy, elegant elongated proportions, clean jawline, delicate nose, soft sculpted lips, sophisticated feminine character design, rich expressive eyebrows, highly appealing fashion-illustration aesthetic, smooth clean linework with minimal visible outlines, polished digital painting finish, soft cel-shaded rendering combined with subtle painterly gradients, warm flattering skin tones, simplified but elegant facial planes, beautifully stylized hair rendered as large flowing graphic shapes with soft highlights, premium animated-film quality, fashion-forward character appeal, tasteful glamour, charming and confident personality, clean silhouette, highly readable shapes, refined color harmony, subtle ambient shading, no harsh shadows, no comic-book rendering, no manga aesthetics, no sketch lines, no painterly brush strokes, no realism, no 3D CGI appearance, no textures, no grain, no paper effects, no halftones, smooth polished illustration finish, contemporary character-art aesthetic, isolated subject on a pure white background (#FFFFFF), no props, no scenery, no text, no logos, no watermark, professional character design sheet quality, premium modern animated illustration style, elegant, attractive and highly polished.`
  },
  {
    id: 25,
    rating: 0,
    title: "Manga Style",
    image: "images/prompt-25.webp",
    text: `Transform the uploaded photo into an authentic manga / anime scene featuring a female protagonist.
Preserve the subject's identity exactly, including pose, facial expression, body proportions, hairstyle, clothing, accessories, colors, and overall composition.
Convert the subject into a high-detail anime/manga character style inspired by modern Japanese animation and cinematic manga panels clean cel-shading with soft gradients.
The image must look like a frame from a high-budget anime or a dramatic manga splash panel, not a cartoon or chibi style.
Use cinematic anime lighting with:
strong rim light
dramatic shadows
glowing highlights
volumetric light rays or speed lines if appropriate
Apply dynamic manga composition:
exaggerated perspective
motion lines
impact streaks
wind or cloth movement
particles rain
The environment should look like a stylized anime city, battlefield, rooftop, street, or cinematic background, depending on the original scene — but always in manga/anime visual language.
If relevant, add anime visual effects such as:
glowing eyes
aura or energy around the character
weapon trails
shockwaves
debris or light flares
The final image must be indistinguishable from a real anime screenshot or a premium manga illustration, while keeping the exact original pose, framing, and scene structure of the uploaded photo.`
  },
  {
    id: 26,
    rating: 0,
    title: "3D Stylized",
    image: "images/prompt-26.webp",
    text: `Transform the provided image into a sensual, stylized 3D animated illustration with an elegant and mature aesthetic. The character should appear confident and alluring without explicit nudity, focusing on pose, facial expression, and lighting to convey sensuality. Use refined proportions, smooth curves, and subtle exaggeration typical of high-end animated character design.

Apply soft cinematic lighting with warm highlights and gentle shadows to enhance skin depth and form. Textures should be highly detailed yet polished, with a glossy–silk finish that feels premium and artistic rather than explicit. Emphasize expressive eyes, lips, and body language.

Style: Sensual 3D animation, elegant cartoon realism, premium character design.
Quality: Ultra HD, 4K–8K, sharp focus, cinematic render.
Background: Pure white for high contrast and drama.
Mood: Confident, seductive, stylish, cinematic.
Constraints: No explicit sexual acts, no nudity, tasteful and artistic presentation.
format: 2:3`
  },
  {
    id: 27,
    rating: 0,
    title: "Stylized Cartoon",
    image: "images/prompt-27.webp",
    text: `Transform the subject in the uploaded image into a stylized cartoon character with vibrant colors, exaggerated features, and a bold, graphic outline. The character should have a playful and dynamic appearance, with large expressive eyes, sharp angular facial features, and a distinctive, stylish outfit.
The character's pose should be confident and lively, reflecting the personality of the subject. The background should be minimalistic or abstract, with complementary colors to the character's design. The overall tone should be energetic and modern, with a slight anime influence in the character's features and attire.`
  },
  {
    id: 28,
    rating: 0,
    title: "Vector Style",
    image: "images/prompt-28.webp",
    text: `A vector illustration, flat cell shading, bold separated color blocks, no gradients, white background.
Vector illustration, flat cell shading, color blocks separated by bold lines, no gradients, thick black outline, white background.`
  },
  {
    id: 29,
    rating: 0,
    title: "Restaurar Foto Antigua",
    image: "images/prompt-29.webp",
    text: `Restaura y mejora esta foto como si hubiera sido tomada hoy con una cámara moderna de alta gama. Mejora la nitidez general y el detalle fino sin alterar la identidad ni los rasgos del sujeto. Realza los colores para que se vean naturales y vibrantes (sin sobresaturar), corrige el balance de blancos y aumenta suavemente el contraste y el rango dinámico. Reduce el ruido, corrige el desenfoque o la suavidad y perfecciona los bordes para lograr una apariencia nítida y realista. Conserva los tonos y texturas auténticos de la piel, evitando cualquier suavizado o estilización artificial. La imagen final debe lucir limpia, en alta resolución y fiel a la escena original, solo más clara y realista.`
  },
  {
    id: 30,
    rating: 0,
    title: "GTA VI",
    image: "images/prompt-30.webp",
    text: `Transform the provided image into a high-end promotional illustration inspired by Grand Theft Auto VI key art style, preserve the exact pose, composition, clothing, and facial features of the subject, semi-realistic digital painting style, clean sharp outlines combined with soft painterly shading, vibrant Miami-inspired color palette with warm sunlight tones and neon accents, cinematic lighting with strong highlights and soft shadows, slightly stylized proportions while maintaining realism, glossy skin tones, detailed textures on clothing, dramatic contrast, subtle grain for a poster-like finish, modern Rockstar-style illustration, depth of field effect, no text, no logos, no UI elements, not 3D render, not gameplay, high resolution, 4K, polished commercial artwork`
  },
  {
    id: 31,
    rating: 0,
    title: "Boceto a Lápiz",
    image: "images/prompt-31.webp",
    text: `Transform the uploaded image into a clean graphite pencil sketch on a pure white background, STRICTLY preserve the subject exactly as in the original image with 100% fidelity in face identity, facial features, expression, body proportions, pose, clothing, hairstyle and overall composition, do not alter anatomy or reinterpret the subject in any way, only convert the rendering into a traditional pencil drawing style, use precise but slightly organic graphite linework with visible hand-drawn imperfections, construct shadows exclusively using fine directional hatching and cross-hatching lines, vary the direction of strokes to define different planes of the face and body, increase density of lines to create darker shadow areas without ever filling or solid coloring any region, keep all shading airy and built through layered strokes rather than smooth gradients, avoid smudging or blending, no soft brush shading, maintain clear paper visibility between strokes, emphasize contour lines subtly while keeping them sketch-like and not overly bold, render hair using flowing layered pencil strokes that follow natural direction and volume, reinterpret clothing folds with structured linework and hatching instead of flat tones, maintain a minimal monochrome graphite palette from very light grey to deep pencil tones, place the subject on a completely clean pure white background with no texture, no grain and no vignette, keep the overall look elegant, lightweight and illustrative, resembling a refined hand-drawn fashion sketch with controlled line density and directional shading, no color, no ink, no digital painting effects, only graphite pencil technique, high detail, crisp and minimalistic finish`
  },
  {
    id: 32,
    rating: 0,
    title: "Comic Neo Pop",
    image: "images/prompt-32.webp",
    text: `ilustración estilo neo pop contemporáneo de alto impacto, mantener exactamente la composición original, pose, proporciones y encuadre de la imagen, transformar el sujeto en un personaje estilizado con rasgos simplificados y geométricos, líneas limpias tipo vector con contornos definidos, piel suave con degradados sutiles sin textura ni ruido, ojos expresivos con formas marcadas y mirada intensa, cejas angulosas y definidas, labios minimalistas, cabello tratado como masas sólidas con formas gráficas y brillos simplificados, fondo completamente blanco plano sin elementos adicionales, iluminación artificial con sombras duras y estilizadas usando colores neón seleccionados dinámicamente según la imagen para maximizar el contraste, elegir un color dominante y aplicar en sombras un color complementario o altamente contrastante (ejemplo rojo con cian, verde con magenta, azul con naranja), evitar usar siempre verde neón, variar la paleta según el sujeto, mantener coherencia cromática con máximo contraste visual, aplicar acentos neón en sombras y reflejos para crear profundidad, evitar sombras grises o realistas, contraste alto entre luces y sombras con estética gráfica limpia, acabado tipo poster digital sin textura fotográfica sin grano sin realismo, estilo juvenil urbano futurista, composición equilibrada con fuerte impacto visual, alta definición ultra nítida`
  },
  {
    id: 33,
    rating: 0,
    title: "Fortnite (Card)",
    image: "images/prompt-33.webp",
    text: `Crea una tarjeta vertical hiperrealista inspirada en una tienda de objetos de videojuego estilo battle royale, usando la foto subida como referencia exacta del rostro, identidad, expresión facial, forma de la cabeza, peinado, color de pelo, rasgos personales y vestuario original, mantén la identidad de la persona con la máxima fidelidad posible, transforma a la persona en una skin estilizada 3D realista de videojuego con proporciones atléticas naturales y acabado premium, el personaje debe aparecer de cuerpo completo ocupando la parte derecha o central derecha de la composición, mirando directamente a cámara, con pose segura y desafiante, brazos cruzados sobre el pecho, postura erguida, hombros firmes, expresión seria y confiada, conserva exactamente la ropa original de la imagen de referencia, mantén los mismos colores, tipo de prenda, corte, tejido, calzado y accesorios visibles, no inventes ropa nueva, no cambies el outfit, no sustituyas prendas, no añadas armaduras, chaquetas, armas, mochilas, guantes ni accesorios que no aparezcan en la imagen original, adapta únicamente la ropa al acabado 3D realista de videojuego manteniendo su diseño original, diseño de tarjeta vertical en formato 3:4 con fondo degradado azul intenso tipo tienda de objetos, estética limpia y brillante, interfaz de videojuego moderna, a la izquierda coloca cuatro iconos cosméticos pequeños dentro de cuadrados azules alineados verticalmente, arriba coloca un banner rectangular de rareza con el texto exacto SKIN ESPECIAL, debajo del personaje coloca el nombre exacto [NAME_INSERT], en la zona inferior coloca el precio exacto 2.500 V-BUCKS junto a un pequeño icono circular azul de moneda, todos los textos deben ser perfectamente legibles, centrados, sin errores ortográficos, sin letras inventadas, sin texto aleatorio, sin símbolos extraños, sin marcas reales, sin logotipos oficiales, sin usar la palabra Fortnite, sin marcas de agua, sin textos adicionales fuera de los especificados, composición profesional de tienda de objetos, render 3D hiperrealista, iluminación de estudio, ropa con costuras y tejido detallado, rostro fiel a la foto de referencia, alta resolución, formato vertical 3:4`
  },
  {
    id: 34,
    rating: 0,
    title: "Skin Fortnite",
    image: "images/prompt-34.webp",
    text: `Transforma únicamente a la persona de la imagen en una skin 3D estilizada de videojuego tipo battle royale, con estética visual inspirada en personajes premium de shooter colorido, mantén exactamente la identidad, rostro, expresión facial, mirada, forma de la cabeza, color de pelo, peinado, accesorios del cabello si los hubiera, proporciones corporales, pose original, posición de brazos y piernas, orientación del cuerpo, encuadre, ropa original, colores de la ropa, calzado y accesorios visibles, no cambies la postura, no cruces los brazos si no están cruzados en la imagen original, no alteres la expresión, no cambies el vestuario, no añadas armas, armaduras, mochilas, guantes, cascos, gafas, joyas ni elementos nuevos, aplica solamente el estilo visual 3D de skin de videojuego a la persona y a su ropa, con modelado limpio, acabado semi-realista, proporciones ligeramente estilizadas pero fieles a la foto, materiales pulidos, iluminación de estudio, detalles nítidos en tejidos y rostro, colores vivos, sombreado suave, aspecto de render profesional de personaje jugable, coloca a la persona aislada sobre fondo blanco puro, sin escenario, sin interfaz, sin tarjeta, sin iconos, sin texto, sin logos, sin marcas de agua, sin efectos de cómic, sin partículas, sin modificar ningún elemento importante de la imagen original, resultado limpio, centrado, alta resolución, formato vertical 3:4`
  },
  {
    id: 35,
    rating: 0,
    title: "Carta Pokémon Entrenador (Pose Clásica)",
    image: "images/prompt-35.webp",
    text: `Transform the person in the uploaded photograph into a full-body anime Pokémon Trainer-style character, using the original image as the strict reference for identity, body, clothing and accessories.
FORMAT
Vertical Pokémon trading card proportions, aspect ratio 63:88, approximately 5:7. Compose the image specifically for this tall format. Show the entire character from the top of the hair to the soles of the shoes, with comfortable space above the head, below the feet and around the body. Nothing may be cropped. Do not create a physical card frame, borders, text, statistics, HP, attacks or TCG interface elements.
IDENTITY
Keep the person immediately recognizable. Preserve their hairstyle, hair color, face shape, eyes, eyebrows, nose, lips, jawline, skin tone, apparent age, body build, proportions, tattoos, facial hair, glasses, piercings and distinctive visible features. Translate these features into anime naturally without replacing them with a generic anime face or body.
CLOTHING
Preserve the original outfit exactly. Do not redesign, replace, simplify, recolor or reinterpret any garment, accessory or footwear. Maintain the original colors, cuts, lengths, fit, patterns, materials, seams, pockets, jewelry, graphics, symbols, numbers, visible text, logos and brand marks in their correct position, scale, spelling and orientation. Only convert the existing outfit into anime-style rendering. Do not invent or remove clothing details.
STYLE
Clean modern Japanese monster-training anime/game illustration with crisp dark linework, recognizable expressive eyes, simplified but identity-faithful facial anatomy, polished flat colors, smooth cel shading and controlled highlights. Keep realistic proportions based on the actual person rather than generic or exaggerated anime anatomy.
POSE
Change only the pose to a confident natural standing trainer pose, facing mostly toward the viewer. The character must clearly hold a classic red-and-white Poké Ball in one hand, either beside the body or slightly raised. Keep hands anatomically correct.
BACKGROUND
Replace the original environment with a dynamic abstract anime/game background using vibrant gradients, radial energy streaks, speed lines, glowing shapes, sparks, particles and light effects radiating behind the character. Choose colors that complement the original outfit and maintain strong silhouette separation. No realistic landscape and no additional characters or creatures.
PRIORITY
Recognizable identity, exact clothing and logos, real body proportions, full-body composition, visible Poké Ball, abstract energetic background.
Avoid generic anime faces, altered hairstyle, beautification that changes identity, changed body type, modified clothing, missing or incorrect logos or text, invented accessories, oversized eyes, chibi proportions, malformed hands, extra fingers, cropped body parts and photorealism.
Final output: vertical 63:88 aspect ratio, approximately 5:7.`
  },
  {
    id: 36,
    rating: 0,
    title: "Carta Pokémon Entrenador (Pose Original Foto)",
    image: "images/prompt-36.webp",
    text: `Transform the person in the uploaded photo into a full-body anime Pokémon Trainer-style character, using the original image as the strict reference for identity, pose, clothing, body proportions and visible details.
FORMAT
Vertical 5:7 aspect ratio, approximately Pokémon card proportions 63:88. Show the complete character from head to shoes with comfortable space around the body and nothing important cropped.
Do not add card frames, borders, HP, attacks, stats, names, typography or interface elements.
IDENTITY
Keep the person immediately recognizable. Preserve:
hairstyle and hair color
facial features and skin tone
apparent age
body build and proportions
tattoos, facial hair, glasses, piercings and distinctive traits
Do not use a generic anime face or generic anime body.
Render them in a clean modern Japanese monster-training anime/game style with crisp dark linework, expressive but recognizable eyes, polished cel shading, flat vibrant colors and controlled highlights.
CLOTHING
Preserve the original outfit exactly: garments, colors, footwear, accessories, graphics, text and logos. Do not redesign, replace, simplify or recolor anything. Only translate the clothing into anime style.
POSE
Preserve the original pose and silhouette as closely as possible, including body orientation, head angle, shoulders, torso, arms, legs, feet and weight distribution.
Do not convert the person into a generic trainer pose.
POKÉ BALL
Add one classic red-and-white Poké Ball to whichever existing hand requires the least alteration.
Do not reposition the arm, shoulder or elbow. Modify only the fingers/grip as necessary. Keep the other hand and arm unchanged.
BODY
Preserve the person's real physique. Do not make them slimmer, taller, more muscular, curvier or give them exaggerated anime proportions.
BACKGROUND
Remove the original background completely. No scenery, architecture, furniture, landscape, lighting or other environmental elements from the photo may remain or be reinterpreted.
Replace it with a 100% new abstract anime/game background using vibrant gradients, energy streaks, speed lines, glowing shapes, particles, sparks, abstract bursts, subtle geometry and aura effects.
Use colors that complement the character and create strong separation. Abstract background only — never blend it with the original environment.
PRIORITY
Recognizable identity
Exact original pose and silhouette
Hairstyle and distinctive features
Real body proportions
Original clothing, text and logos
Poké Ball with minimal hand alteration
Complete background replacement
Dynamic abstract background
Vertical 5:7 / 63:88 composition
AVOID
Generic anime faces, altered poses, trainer stances, changed body type or age, beautification, oversized eyes, chibi proportions, altered clothing or logos, incorrect tattoos, random accessories, malformed hands, extra fingers, cropped feet, photorealism, realistic scenery, background remnants, other characters or Pokémon.
CRITICAL: Preserve the original person, clothing and pose; add only the Poké Ball; completely replace the background with a purely abstract one.`
  },
  {
    id: 37,
    rating: 0,
    title: "Rotulador con Fondo Abstracto",
    image: "images/prompt-37.webp",
    text: `Transform the person in the image into a hand-drawn black-ink and alcohol-marker illustration, preserving their identity with maximum fidelity: same facial features, facial proportions, expression, hairstyle, body shape, body proportions, pose, posture, clothing, accessories, tattoos and all visible distinctive details.
Do not beautify, exaggerate, slim, enlarge, reshape or reinterpret the person. Only change the artistic medium.
Render the subject as if it were first drawn by hand with black ink and then manually colored with alcohol markers on paper.
Use strong black outer contours, thinner expressive interior lines, slightly irregular handmade linework, visible broad marker strokes, overlapping passes, slight variations in saturation and clearly visible stroke direction. Use mostly flat color areas with only 2–3 marker tones for shading. Avoid smooth digital gradients.
Keep the subject sharp, detailed and visually dominant.
Replace the original background with an abstract marker interpretation clearly inspired by the original environment. Preserve the original background's main colors, light direction, atmosphere, spatial distribution and most recognizable shapes, but simplify them into broad marker strokes, soft geometric forms, loose color blocks and reduced-detail silhouettes.
The abstract background should immediately evoke the original location without reproducing it literally. Keep only the essential visual cues of the original scene and remove unnecessary detail.
Use softer edges, fewer black outlines and lower contrast in the background so the subject remains the clear focal point. The background should feel intentionally artistic and simplified, not empty or random.
The entire background must remain in the same hand-drawn alcohol-marker style, with visible marker texture, overlapping strokes and natural handmade irregularities. Do not introduce photographic elements, digital blur, realistic bokeh, gradients or painterly effects.
The final result must feel like a traditional black-ink and alcohol-marker portrait, with a detailed subject against an abstract marker-rendered background that clearly references the colors, shapes and atmosphere of the original setting.`
  },
  {
    id: 38,
    rating: 0,
    title: "Rotu con Fondo Desenfocado",
    image: "images/prompt-38.webp",
    text: `Transform the entire image into a fully hand-drawn alcohol-marker illustration. No photographic pixels, photographic textures or untouched parts of the original image should remain anywhere in the final result.
Preserve the person with maximum identity accuracy: exact facial features, proportions, expression, hairstyle, pose and body structure. Do not beautify, stylize, reinterpret or modify their appearance. Only change the visual medium.
Render the subject in a realistic professional marker-illustration style using bold black ink outlines, thick confident contour lines, clearly visible alcohol-marker strokes, layered marker shading, slight handmade irregularities, vibrant saturated colors and subtle paper grain. Facial details must remain precise and recognizable while still looking unmistakably hand-drawn with real markers.
Completely redraw the original environment in the SAME marker-and-ink style. The background must never look like a blurred photograph underneath the illustration. Replace all photographic detail with clearly illustrated marker shapes, visible broad marker strokes, simplified forms, hand-drawn edges and blocks of layered color.
Create a very strong illustrated shallow-depth-of-field effect. The person must be crisp, detailed and sharply drawn, while the background becomes progressively softer, simpler and much less defined.
The background blur must be created through illustration, NOT through photographic or digital blur:

* use large loose marker strokes
* strongly simplify shapes and objects
* remove fine lines and small details
* soften and partially merge edges
* reduce contrast behind the subject
* use broad overlapping marker passes
* represent distant elements as soft abstract marker silhouettes
* keep enough color and general shape to recognize the original setting

Even the most out-of-focus areas must visibly show marker pigment, paper texture and hand-rendered color transitions. They should look like intentionally blurred marker drawings, never like a photograph with Gaussian blur or lens blur applied.
Avoid photographic bokeh circles, realistic lens blur, smooth digital gradients, photographic textures, photorealistic background elements or sharp background details.
The final image must unmistakably look like a complete traditional illustration made with black ink and alcohol markers on matte paper: a highly detailed and recognizable subject in sharp focus against a strongly defocused, simplified and visibly marker-rendered background.`
  },
  {
    id: 39,
    rating: 0,
    title: "Ilustración Editorial Abstracta",
    image: "images/prompt-39.webp",
    text: `Transform the source image into a refined abstract editorial illustration that closely matches the visual language of the provided reference image.

PRESERVE THE SOURCE:
Preserve the identity and recognizability of every person in the original image as much as this highly stylized visual language allows.

Keep the original number of people, their relative positions, pose, body proportions, interaction, facial orientation, expression, hairstyle, clothing silhouette, accessories and overall composition.

Do not replace the people with generic characters.

IDENTITY PRESERVATION:
Translate each person’s distinctive characteristics into simplified graphic forms.

Preserve recognizable elements such as:
- face shape and profile,
- forehead and jaw proportions,
- nose shape and direction,
- eyebrow shape,
- eye placement,
- mouth shape and expression,
- hairstyle, hair length and hair volume,
- skin tone relationships,
- body silhouette,
- distinctive clothing or accessories.

Identity should come from accurate shapes and proportions rather than realistic facial detail.

Do NOT introduce realistic facial rendering in an attempt to preserve identity.

VISUAL STYLE:
Reinterpret the entire image as an elegant contemporary editorial illustration built from flat organic shapes, layered paper-like forms and minimalist facial features.

Use smooth flowing silhouettes and simplified geometric construction.

Faces should be highly stylized and minimal:
- simple closed or reduced eyes,
- minimal eyebrows,
- a simplified nose,
- small graphic lips,
- almost no internal facial detail,
- no realistic skin rendering.

The people must remain recognizable through their silhouette, proportions, hairstyle and distinctive facial geometry while clearly belonging to this abstract illustration style.

COLOR PALETTE:
Use a sophisticated muted palette dominated by:
- dusty rose,
- muted terracotta,
- warm peach,
- ochre and mustard,
- deep navy blue,
- desaturated teal,
- mauve,
- plum,
- warm cream,
- muted beige.

Avoid bright digital colors, neon tones and pure black whenever possible.

SHAPES:
Construct the illustration from large overlapping organic shapes with gently curved edges.

Hair should become flowing layered masses of color rather than individual strands.

Clothing should become broad simplified color fields with only the essential shapes needed to describe the original garments.

Skin should use large flat areas of warm color with very limited tonal variation.

Do not use conventional realistic shading.

TEXTURE:
Give the entire illustration a tactile handmade quality inspired by cut and layered art paper.

Add subtle:
- paper fibers,
- grain,
- pigment irregularities,
- tiny speckles,
- faded imperfections,
- softly distressed areas,
- occasional torn-paper edges,
- slight differences in texture between overlapping shapes.

The texture should be visible but elegant and restrained.

DEPTH:
Create depth primarily through overlapping shapes, subtle paper layering and very soft contact shadows between selected layers.

Do not create realistic three-dimensional modelling.

DECORATIVE ELEMENTS:
Integrate a restrained selection of abstract organic and geometric elements around the composition: circles, semicircles, curved shapes, flowing thin lines, small dots and occasional minimalist botanical forms.

These elements should complement the original composition rather than overwhelm the people.

BACKGROUND:
Replace the photographic environment with an abstract composition derived from the dominant shapes and colors of the source image.

Use warm cream textured paper as the underlying surface, combined with overlapping muted geometric and organic shapes.

Do not reproduce the original background realistically.

COMPOSITION:
Preserve the essential spatial relationship, pose and interaction of the people from the original photograph, but reinterpret the surrounding environment freely within this abstract editorial language.

The subjects must remain the clear visual focus.

STRICTLY AVOID:
photorealism,
semi-realism,
realistic portrait painting,
detailed facial rendering,
realistic eyes,
skin pores,
individual hair strands,
3D rendering,
smooth digital gradients,
glossy surfaces,
anime,
comic-book rendering,
vector-clean perfection,
watercolor appearance,
generic cartoon characters,
excessive facial detail.

CRITICAL STYLE RULE:
Do not sacrifice the illustration style in an attempt to make the faces more realistic.

Preserve identity through accurate silhouette, facial geometry, hairstyle, proportions, expression and distinctive features, while keeping the actual rendering extremely simplified and graphic.

Every photographic element must be completely translated into this visual language.

FINAL RESULT:
The finished image should look like a sophisticated contemporary editorial illustration made from layered textured paper and flat organic color shapes, with elegant simplified human figures, minimalist facial features, muted earthy colors, subtle handmade imperfections and abstract decorative elements.

It must clearly evoke the same person or people and the same moment as the source photograph while looking completely illustrated rather than photographic.`
  },
  {
    id: 40,
    rating: 0,
    title: "Prompt 40 - (pon aqui el nombre del estilo)",
    image: "images/prompt-40.webp",
    text: `Pega aqui el texto completo del prompt 40...`
  },
  {
    id: 41,
    rating: 0,
    title: "Prompt 41 - (pon aqui el nombre del estilo)",
    image: "images/prompt-41.webp",
    text: `Pega aqui el texto completo del prompt 41...`
  },
  {
    id: 42,
    rating: 0,
    title: "Prompt 42 - (pon aqui el nombre del estilo)",
    image: "images/prompt-42.webp",
    text: `Pega aqui el texto completo del prompt 42...`
  },
  {
    id: 43,
    rating: 0,
    title: "Prompt 43 - (pon aqui el nombre del estilo)",
    image: "images/prompt-43.webp",
    text: `Pega aqui el texto completo del prompt 43...`
  },
  {
    id: 44,
    rating: 0,
    title: "Prompt 44 - (pon aqui el nombre del estilo)",
    image: "images/prompt-44.webp",
    text: `Pega aqui el texto completo del prompt 44...`
  },
  {
    id: 45,
    rating: 0,
    title: "Prompt 45 - (pon aqui el nombre del estilo)",
    image: "images/prompt-45.webp",
    text: `Pega aqui el texto completo del prompt 45...`
  },
  {
    id: 46,
    rating: 0,
    title: "Prompt 46 - (pon aqui el nombre del estilo)",
    image: "images/prompt-46.webp",
    text: `Pega aqui el texto completo del prompt 46...`
  },
  {
    id: 47,
    rating: 0,
    title: "Prompt 47 - (pon aqui el nombre del estilo)",
    image: "images/prompt-47.webp",
    text: `Pega aqui el texto completo del prompt 47...`
  },
  {
    id: 48,
    rating: 0,
    title: "Prompt 48 - (pon aqui el nombre del estilo)",
    image: "images/prompt-48.webp",
    text: `Pega aqui el texto completo del prompt 48...`
  },
  {
    id: 49,
    rating: 0,
    title: "Prompt 49 - (pon aqui el nombre del estilo)",
    image: "images/prompt-49.webp",
    text: `Pega aqui el texto completo del prompt 49...`
  },
  {
    id: 50,
    rating: 0,
    title: "Prompt 50 - (pon aqui el nombre del estilo)",
    image: "images/prompt-50.webp",
    text: `Pega aqui el texto completo del prompt 50...`
  }
];
