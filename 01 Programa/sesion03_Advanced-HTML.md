# Sesión 2 - HTML Avanzado: Formularios y Elementos Semánticos
*Duración: 4 horas (6:00 PM - 10:00 PM con break de 20 min)*

## 🎯 **OBJETIVOS DE LA SESIÓN**
Al finalizar esta sesión, los campistas podrán:
- Crear formularios HTML completos con diferentes tipos de input
- Implementar validaciones HTML nativas
- Utilizar elementos semánticos para estructurar contenido
- Integrar multimedia (imágenes, videos, audio) de forma accesible
- Crear tablas estructuradas y accesibles

---

## 📋 **ESTRUCTURA DE LA SESIÓN**

### **BLOQUE 1: 6:00 PM - 8:00 PM (120 min)**

#### **🚀 Warm-up y Revisión (15 min) - 6:00-6:15 PM**
**Actividad Interactiva:** "HTML Quiz Battle"
- Kahoot con preguntas sobre la sesión anterior
- Repaso rápido de etiquetas básicas
- Motivación para la nueva sesión

#### **📝 Formularios HTML Fundamentales (45 min) - 6:15-7:00 PM**

**Conceptos Clave:**
- Elemento `<form>` y sus atributos
- Inputs básicos: text, email, password, number
- Labels y su importancia para accesibilidad
- Botones: submit, reset, button

**💻 ACTIVIDAD PRÁCTICA 1: "Mi Primer Formulario" (20 min)**
*Herramienta: CodePen o Replit*

Los campistas crearán un formulario de registro básico:
```html
<form action="#" method="post">
  <label for="nombre">Nombre completo:</label>
  <input type="text" id="nombre" name="nombre" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="16" max="99">
  
  <button type="submit">Registrarse</button>
</form>
```

#### **🎨 Inputs Avanzados y Validaciones (40 min) - 7:00-8:00 PM**

**Conceptos Clave:**
- Inputs especializados: date, tel, url, color, range
- Atributos de validación: required, pattern, min/max, minlength/maxlength
- Textarea y select
- Checkboxes y radio buttons
- Fieldset y legend para agrupar campos

**💻 ACTIVIDAD PRÁCTICA 2: "Formulario de Contacto Pro"**

---

### **⏰ BREAK: 8:00 PM - 8:20 PM (20 min)**
*Descanso activo: Los campistas pueden compartir capturas de su progreso en el chat*

---

### **BLOQUE 2: 8:20 PM - 10:00 PM (100 min)**

#### **📊 Tablas HTML Estructuradas (30 min) - 8:20-8:50 PM**

**Conceptos Clave:**
- Estructura básica: table, thead, tbody, tfoot
- Filas (tr) y celdas (td, th)
- Atributos: colspan, rowspan
- Caption para accesibilidad

**💻 ACTIVIDAD PRÁCTICA 3: "Tabla de Horarios del Bootcamp" (15 min)**

#### **🎬 Multimedia y Elementos Semánticos (40 min) - 8:50-9:30 PM**

**Conceptos Clave:**
- Elementos semánticos: header, nav, main, section, article, aside, footer
- Multimedia: img (con alt), video, audio
- Figure y figcaption
- Iframe responsivo

**💻 ACTIVIDAD PRÁCTICA 4: "Página Semántica con Multimedia" (25 min)**

#### **🏆 PROYECTO INTEGRADOR (30 min) - 9:30-10:00 PM**

**"Formulario de Contacto Completo"**
Combinando todo lo aprendido, crear un formulario profesional de contacto.

---

## 🛠️ **HERRAMIENTAS ONLINE A UTILIZAR**

### **Principales:**
- **CodePen** - Para ejercicios rápidos y prototipos
- **Replit** - Entorno de desarrollo completo
- **Figma** - Para mockups rápidos (opcional)

### **Secundarias:**
- **Kahoot** - Quiz interactivos
- **Mentimeter** - Encuestas en tiempo real
- **Canva** - Imágenes placeholder

### **Recursos:**
- **Unsplash** - Imágenes gratuitas
- **Iconify** - Íconos SVG
- **Google Fonts** - Fuentes web

---

## 📚 **CONTENIDO DETALLADO**

### **PARTE 1: FORMULARIOS AVANZADOS**

#### **Tipos de Input Especializados**

```html
<!-- Input de fecha -->
<label for="nacimiento">Fecha de nacimiento:</label>
<input type="date" id="nacimiento" name="nacimiento">

<!-- Input de teléfono -->
<label for="telefono">Teléfono:</label>
<input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}">

<!-- Input de color -->
<label for="color">Color favorito:</label>
<input type="color" id="color" name="color" value="#ff0000">

<!-- Input de rango -->
<label for="experiencia">Nivel de experiencia:</label>
<input type="range" id="experiencia" name="experiencia" 
       min="1" max="10" value="5">
```

#### **Validaciones HTML Nativas**

```html
<!-- Validación de email -->
<input type="email" required 
       title="Ingresa un email válido">

<!-- Validación con patrón -->
<input type="text" pattern="[A-Za-z]{3,}" 
       title="Mínimo 3 letras">

<!-- Validación de longitud -->
<input type="password" minlength="8" maxlength="20" 
       required title="Entre 8 y 20 caracteres">
```

### **PARTE 2: ELEMENTOS SEMÁNTICOS**

#### **Estructura Semántica Básica**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página Semántica</title>
</head>
<body>
    <header>
        <h1>Mi Sitio Web</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="inicio">
            <h2>Bienvenidos</h2>
            <article>
                <h3>Primer artículo</h3>
                <p>Contenido del artículo...</p>
            </article>
        </section>
        
        <aside>
            <h3>Información adicional</h3>
            <p>Contenido del sidebar...</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Sitio Web</p>
    </footer>
</body>
</html>
```

### **PARTE 3: TABLAS ESTRUCTURADAS**

```html
<table>
    <caption>Horario del Bootcamp</caption>
    <thead>
        <tr>
            <th>Día</th>
            <th>Módulo</th>
            <th>Tema</th>
            <th>Duración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lunes</td>
            <td>HTML</td>
            <td>Estructura básica</td>
            <td>4 horas</td>
        </tr>
        <tr>
            <td>Martes</td>
            <td>HTML</td>
            <td>Formularios avanzados</td>
            <td>4 horas</td>
        </tr>
    </tbody>
</table>
```

---

## 🎯 **ACTIVIDADES PASO A PASO**

### **💻 ACTIVIDAD PRÁCTICA 1: "Mi Primer Formulario" (20 min)**

**Objetivo:** Crear un formulario de registro básico
**Tiempo:** 20 minutos
**Plataforma:** CodePen

**Instrucciones para los campistas:**

1. **Crear nuevo pen en CodePen** (2 min)
2. **Estructura básica del formulario** (8 min)
   - Elemento form con action y method
   - Campos: nombre, email, edad
   - Labels apropiados
   - Botón de envío
3. **Añadir validaciones básicas** (8 min)
   - Required en campos obligatorios
   - Type="email" para email
   - Min/max para edad
4. **Prueba y ajustes** (2 min)

**Código base proporcionado:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Registro</title>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <!-- Aquí va tu formulario -->
    
</body>
</html>
```

**Criterios de evaluación:**
- ✅ Formulario funcional
- ✅ Labels correctamente asociados
- ✅ Validaciones HTML implementadas
- ✅ Estructura semántica

### **💻 ACTIVIDAD PRÁCTICA 2: "Formulario de Contacto Pro" (35 min)**

**Objetivo:** Crear un formulario completo de contacto profesional
**Tiempo:** 35 minutos
**Plataforma:** Replit

**Estructura del formulario:**
- Información personal (nombre, email, teléfono)
- Tipo de consulta (select con opciones)
- Nivel de urgencia (radio buttons)
- Servicios de interés (checkboxes)
- Mensaje (textarea)
- Fecha preferida de contacto
- Términos y condiciones (checkbox requerido)

### **💻 ACTIVIDAD PRÁCTICA 3: "Tabla de Horarios del Bootcamp" (15 min)**

**Objetivo:** Crear una tabla estructurada con información del bootcamp
**Elementos requeridos:**
- Caption descriptivo
- Headers de tabla (th)
- Agrupación con thead, tbody
- Uso de colspan para celdas combinadas

### **💻 ACTIVIDAD PRÁCTICA 4: "Página Semántica con Multimedia" (25 min)**

**Objetivo:** Integrar elementos semánticos con contenido multimedia
**Estructura requerida:**
- Header con navegación
- Main con secciones
- Articles con contenido
- Aside con información complementaria
- Footer con información de contacto
- Imágenes con alt text apropiado
- Video embebido (opcional)

---

## 🏆 **PROYECTO INTEGRADOR: "Formulario de Contacto Completo"**

### **Descripción del Proyecto (30 min)**

Los campistas crearán un formulario de contacto profesional que integre todos los conceptos aprendidos:

**Requerimientos técnicos:**
- Estructura HTML semántica
- Formulario completo con validaciones
- Tabla con información de servicios
- Elementos multimedia
- Accesibilidad correcta

**Elementos específicos:**
1. **Header semántico** con título y navegación
2. **Formulario principal** con:
   - Datos personales
   - Tipo de servicio (select)
   - Presupuesto estimado (range input)
   - Fecha preferida (date input)
   - Archivos adjuntos (file input)
   - Mensaje detallado (textarea)
3. **Tabla de precios/servicios**
4. **Sección multimedia** con imagen corporativa
5. **Footer** con información de contacto

**Criterios de evaluación:**
- ✅ HTML válido y semántico
- ✅ Formulario funcional con validaciones
- ✅ Accesibilidad (labels, alt texts)
- ✅ Estructura clara y organizada
- ✅ Creatividad en el diseño

---

## 🔄 **METODOLOGÍA INTERACTIVA**

### **Técnicas de Engagement:**

1. **Code-Along Sessions:** El instructor codifica en vivo mientras los estudiantes siguen
2. **Pair Programming:** Estudiantes trabajan en parejas en breakout rooms
3. **Show and Tell:** Cada 30 minutos, voluntarios comparten su progreso
4. **Debug Together:** Resolución colaborativa de errores comunes
5. **Quick Polls:** Verificación de comprensión con Mentimeter

### **Gamificación:**

- **Puntos por participación** en actividades
- **Badges digitales** por completar ejercicios
- **Leaderboard** del quiz inicial
- **"Código del día"** - snippet destacado de un campista

### **Herramientas de Colaboración:**

- **Slack/Discord** para comunicación continua
- **CodePen Collections** para compartir trabajos
- **Miro Board** para lluvia de ideas
- **Zoom Breakout Rooms** para trabajo en grupos

---

## 📖 **RECURSOS ADICIONALES**

### **Para Profundizar:**
- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [W3C HTML Validator](https://validator.w3.org/)
- [WebAIM - Form Accessibility](https://webaim.org/techniques/forms/)

### **Herramientas Recomendadas:**
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [HTML5 Boilerplate](https://html5boilerplate.com/) - Template base
- [Semantic HTML Guide](https://web.dev/semantics-builtin/)

### **Inspiración:**
- [Form Design Examples](https://dribbble.com/tags/form_design)
- [Semantic HTML Examples](https://github.com/diegocard/awesome-html5)

---

## ✅ **TAREAS PARA LA PRÓXIMA SESIÓN**

1. **Completar el formulario de contacto** si no se terminó en clase
2. **Leer sobre CSS básico** - preparación para la siguiente sesión
3. **Investigar 3 sitios web** y identificar sus elementos semánticos
4. **Practicar validaciones HTML** con formularios adicionales

### **Entregables:**
- Link a CodePen con formulario de contacto completo
- Screenshot de validaciones funcionando
- Lista de elementos semánticos encontrados en sitios investigados

---

## 🎯 **EVALUACIÓN CONTINUA**

### **Durante la Sesión:**
- Participación en actividades (40%)
- Calidad del código producido (40%)
- Colaboración y ayuda a compañeros (20%)

### **Indicadores de Éxito:**
- 100% de campistas completan al menos 3 de 4 actividades
- 80% logra implementar validaciones correctamente
- 90% demuestra comprensión de elementos semánticos

---

*¡Recuerda: La práctica constante y la experimentación son clave para dominar HTML! 🚀*