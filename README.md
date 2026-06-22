# 🎓 Graduación Prebásica — Guía Rápida

## Estructura del proyecto

```
graduacion/
├── index.html        ← El sitio web (no lo toques)
├── datos.js          ← Aquí editas los nombres y mensajes
├── README.md         ← Esta guía
└── fotos/            ← Aquí van TODAS las fotos
    ├── sofia-ramirez-inicio.jpg
    ├── sofia-ramirez-graduacion.jpg
    ├── mateo-lopez-inicio.jpg
    ├── mateo-lopez-graduacion.jpg
    └── ...
```

---

## ¿Cómo agregar un niño?

### Paso 1 — Pon las fotos en la carpeta `/fotos/`

Nombra las fotos así (todo en minúsculas, guiones, sin acentos):

```
nombre-apellido-inicio.jpg         ← foto de prekínder
nombre-apellido-graduacion.jpg     ← foto de graduación
```

**Ejemplos:**
- `ana-garcia-inicio.jpg`
- `ana-garcia-graduacion.jpg`
- `luis-mejia-inicio.jpg`
- `luis-mejia-graduacion.jpg`

---

### Paso 2 — Agrega el niño en `datos.js`

Abre `datos.js` y copia este bloque dentro del arreglo `GRADUADOS`:

```js
{
  nombre: "Ana García",
  foto_inicio: "fotos/ana-garcia-inicio.jpg",
  foto_fin: "fotos/ana-garcia-graduacion.jpg",
  mensaje: "Tu energía ilumina cada salón que pisas."
},
```

---

### Paso 3 — Cambia el nombre del colegio

Al final de `datos.js`, en la sección `MENSAJE_PRINCIPAL`, edita:
- `colegio` → nombre de tu colegio
- `subtitulo` → año o grupo
- `mensaje` → el texto que aparece en la portada

---

## Consejos para las fotos

- Formato: **JPG o PNG**
- Tamaño recomendado: al menos **400×500 px** (vertical)
- Peso máximo sugerido: **500 KB** por foto (para que cargue rápido en celulares)
- Si una foto no está disponible, el sitio muestra un placeholder automáticamente

---

## ¿Cómo abrirlo?

- **En evento (pantalla grande):** Abre `index.html` directo en el navegador (Chrome o Edge recomendado).
- **Compartir por link:** Sube toda la carpeta a cualquier servicio gratuito:
  - [Netlify Drop](https://app.netlify.com/drop) — arrastra la carpeta y listo, te da un link
  - [GitHub Pages](https://pages.github.com/) — sube el repo y activa Pages
  - Google Drive (Modo presentación, menos recomendado)

---

## ¿Funciona sin internet?

**Sí**, si lo abres directo desde el archivo. Las fotos cargadas en la carpeta `/fotos/` funcionan sin conexión. Solo las fuentes de Google Fonts necesitan internet (si no hay, carga con fuente de sistema).
