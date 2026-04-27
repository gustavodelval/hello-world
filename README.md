# 🎸 Bar Rock & Cántabro - Sitio Web Oficial

Un sitio web moderno y responsive para un bar que fusiona la energía del Rock & Roll con la tradición musical cántabra.

## 🚀 Vista Rápida

**Para ver el sitio web:**
1. Abre el archivo `index.html` en tu navegador
2. O usa un servidor local: `python3 -m http.server 8000` y visita `http://localhost:8000`

## 📁 Estructura del Proyecto

```
/workspace
├── index.html          # Página principal (HTML5 semántico)
├── css/
│   └── styles.css      # Hoja de estilos completa
├── js/
│   └── main.js         # JavaScript para interactividad
├── assets/
│   ├── images/         # Directorio para imágenes
│   │   └── LOGO.jpg    # Coloca aquí tu logotipo
│   └── fonts/          # Directorio para fuentes personalizadas
└── README.md           # Este archivo
```

## ✨ Características Principales

### Diseño & UX
- **Mobile-first**: Diseñado primero para móvil, luego escalado a tablet y escritorio
- **Responsive**: Se adapta perfectamente a todos los dispositivos
- **Dark theme**: Estética nocturna con colores oscuros y acentos en cobre/rojo
- **Animaciones sutiles**: Transiciones fluidas y efectos hover elegantes
- **Accesibilidad**: Navegación por teclado, ARIA labels, contraste adecuado

### Secciones Incluidas
1. **Header sticky** con navegación y botón de reserva
2. **Hero impactante** con animaciones de entrada
3. **Historia** del bar con características destacadas
4. **Carta** con sistema de pestañas interactivo (Tapas, Principales, Bebidas, Postres)
5. **Eventos** con cards de próximos conciertos y actividades
6. **Galería** grid responsive con efectos hover
7. **Reservas** formulario funcional con validación
8. **Contacto** con información, horario y redes sociales
9. **Footer** completo con enlaces y datos de contacto

### Funcionalidades JavaScript
- Menú móvil con overlay animado
- Header que cambia al hacer scroll
- Smooth scroll para navegación interna
- Sistema de tabs para la carta
- Formulario de reservas con validación
- Notificaciones toast para feedback
- Back to top button
- Animaciones al hacer scroll (Intersection Observer)
- Lazy loading para imágenes
- Efecto parallax en el hero

## 🎨 Identidad Visual

### Paleta de Colores
- **Fondos**: Negros profundos (#0a0a0a), grises antracita (#1a1a1a)
- **Acentos rockeros**: Rojo intenso (#c41e3a), cobre (#b87333)
- **Acentos cántabros**: Azul atlántico (#1a3a5c), arena (#d4c4a8)

### Tipografía
- **Display**: Anton (impactante, para títulos)
- **Body**: Montserrat (legible, moderna)
- **Accent**: Playfair Display (elegante, para detalles)

## 🔧 Personalización

### Añadir el Logotipo
1. Guarda tu logo como `LOGO.jpg` en `assets/images/`
2. Dimensiones recomendadas: 500x200px
3. El código incluye fallback automático si no hay logo

### Modificar Contenido
- **Textos**: Edita directamente `index.html`
- **Colores**: Modifica las variables CSS en `css/styles.css` (:root)
- **Menú carta**: Actualiza los items en la sección correspondiente del HTML
- **Eventos**: Edita las cards en la sección de eventos

### Integrar Mapa Real
Reemplaza el placeholder del mapa con Google Maps Embed:
```html
<iframe src="https://www.google.com/maps/embed?..." ...></iframe>
```

### Conectar Formulario de Reservas
Actualmente el formulario simula el envío. Para hacerlo funcional:
1. Usa un servicio como Formspree, EmailJS o Netlify Forms
2. O implementa tu propio backend para procesar las reservas

## 📱 Responsive Breakpoints

- **Móvil**: < 640px
- **Tablet**: 640px - 768px
- **Tablet grande**: 768px - 1024px
- **Escritorio**: 1024px - 1280px
- **Pantallas grandes**: > 1280px

## ♿ Accesibilidad

- Navegación completa por teclado
- Labels ARIA en elementos interactivos
- Contraste de color WCAG AA compliant
- Soporte para prefers-reduced-motion
- Focus visible personalizado

## 🚀 Optimización

- CSS y JavaScript vanilla (sin dependencias externas pesadas)
- Fuentes de Google Fonts optimizadas
- Lazy loading nativo para imágenes
- Scroll events con opción passive
- Intersection Observer para animaciones eficientes

## 📄 Licencia

Este proyecto es una plantilla personalizada. Úsalo libremente para tu negocio.

---

**Hecho con 🎸 y 🍺 en Cantabria**
