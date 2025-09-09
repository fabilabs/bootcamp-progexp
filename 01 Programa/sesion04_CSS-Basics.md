# Sesión 3 - CSS Básico
**Duración:** 4 horas (240 minutos) | **Modalidad:** 100% Virtual | **Nivel:** Principiante

---

## 📋 **OBJETIVOS DE APRENDIZAJE**
Al finalizar esta sesión, los campistas serán capaces de:
- Comprender los selectores CSS y su especificidad
- Aplicar propiedades básicas de estilo (colores, tipografía, espaciado)
- Entender y aplicar el modelo de caja (box model)
- Estilizar completamente su página personal creada en sesiones anteriores

---

## ⏰ **ESTRUCTURA DE LA SESIÓN**

### **BLOQUE 1: 6:00 PM - 8:00 PM (120 minutos)**

#### **Opening Energizer (10 min) - 6:00-6:10 PM**
🎯 **Actividad "CSS Color Challenge"**
- Los campistas deben identificar colores mostrados en pantalla usando nombres CSS
- Usar herramienta online como [Coolors.co](https://coolors.co/)
- Generar energía y conectar con el tema de colores

#### **Recap y Contexto (15 min) - 6:10-6:25 PM**
- Review rápido de HTML estructural de sesiones anteriores
- Mostrar la misma página con y sin CSS para evidenciar la diferencia
- Introducir la analogía: "HTML es el esqueleto, CSS es la piel y la ropa"

#### **Tema 1: Selectores CSS (35 min) - 6:25-7:00 PM**

**Conceptos clave:**
- Selectores básicos: elemento, clase, ID
- Selectores de atributo
- Selectores descendientes
- Especificidad básica

**Demo en vivo usando CodePen:**
```css
/* Selector de elemento */
h1 { color: blue; }

/* Selector de clase */
.destacado { background-color: yellow; }

/* Selector de ID */
#titulo-principal { font-size: 2em; }

/* Selector descendiente */
nav a { text-decoration: none; }
```

**💡 Actividad práctica (20 min):**
- En CodePen, crear selectores para diferentes elementos
- Competencia: "¿Quién puede crear el selector más específico?"

#### **Tema 2: Propiedades Básicas y Colores (40 min) - 7:00-7:40 PM**

**Conceptos clave:**
- Sistemas de color: nombres, hex, rgb, hsl
- Propiedades de texto: color, background-color
- Transparencia con rgba y opacity

**Demo interactiva:**
```css
.ejemplo {
  color: #ff6b6b;
  background-color: rgba(74, 144, 226, 0.3);
  opacity: 0.8;
}
```

**🎨 Actividad práctica (25 min):**
- Crear una paleta de colores personalizada
- Aplicar diferentes sistemas de color en CodePen
- Usar [Adobe Color](https://color.adobe.com/) para inspiración

#### **Tema 3: Tipografía (20 min) - 7:40-8:00 PM**

**Conceptos clave:**
- font-family y web fonts
- font-size, font-weight, font-style
- text-align, line-height
- Google Fonts integration

**Demo práctica:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

.texto-bonito {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
}
```

---

### **🍕 BREAK: 8:00 PM - 8:20 PM (20 minutos)**
- Tiempo para estirarse, hidratarse
- Chat informal en breakout rooms
- Mini-trivia CSS opcional

---

### **BLOQUE 2: 8:20 PM - 10:00 PM (100 minutos)**

#### **Warm-up Post-Break (5 min) - 8:20-8:25 PM**
**Quick CSS Quiz:**
- 3 preguntas rápidas sobre lo visto en el primer bloque
- Usar herramientas como Kahoot o Mentimeter

#### **Tema 4: Box Model - El Corazón de CSS (45 min) - 8:25-9:10 PM**

**Conceptos clave:**
- Content, padding, border, margin
- box-sizing: border-box
- Visualización práctica del box model

**Demo visual interactiva:**
```css
.caja-ejemplo {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #333;
  margin: 15px;
  background-color: lightblue;
  
  /* Esto cambia todo el juego: */
  box-sizing: border-box;
}
```

**🔧 Actividad práctica (30 min):**
- Crear diferentes cajas con distintas combinaciones de padding/margin
- Experimentar con border-radius para esquinas redondeadas
- Usar herramientas de dev tools para inspeccionar el box model

#### **Proyecto Principal: Estilizar Página Personal (50 min) - 9:10-10:00 PM**

**🎯 Objetivo:** Transformar la página HTML personal creada en sesiones anteriores

**Actividades paso a paso:**

**Paso 1: Setup y Planificación (10 min)**
- Abrir la página personal en CodePen o editor
- Crear archivo CSS vinculado
- Planificar paleta de colores (3-4 colores máximo)

**Paso 2: Estilizado Básico (15 min)**
- Aplicar tipografía consistente
- Definir colores principales
- Styling del header y navegación

**Paso 3: Contenido Principal (15 min)**
- Estilizar secciones de contenido
- Aplicar box model a diferentes elementos
- Mejorar legibilidad del texto

**Paso 4: Toques Finales (10 min)**
- Ajustar espaciados
- Añadir efectos hover simples
- Testing en diferentes tamaños

**💪 Actividad colaborativa:**
- Breakout rooms de 3-4 personas
- Code review mutuo de páginas
- Sharing de mejores prácticas

---

## 🛠️ **HERRAMIENTAS NECESARIAS**

### **Principales:**
- [CodePen](https://codepen.io/) - Editor online principal
- [Google Fonts](https://fonts.google.com/) - Tipografías web
- [Coolors.co](https://coolors.co/) - Generador de paletas

### **Alternativas de apoyo:**
- [Adobe Color](https://color.adobe.com/) - Paletas profesionales
- [CSS Reference](https://cssreference.io/) - Documentación visual
- Chrome DevTools - Inspección de elementos

---

## 📝 **ACTIVIDADES INTERACTIVAS**

### **Durante la sesión:**
1. **CSS Color Race** - Competencia identificando colores
2. **Selector Specificity Challenge** - Crear selectores complejos
3. **Box Model Detective** - Inspeccionar elementos web reales
4. **Peer Code Review** - Revisar páginas entre compañeros

### **Para motivar participación:**
- Sistema de puntos por participación
- Destacar las mejores páginas del día
- Crear un "Hall of Fame" CSS del bootcamp

---

## 🏆 **ENTREGABLES**

### **Al final de la sesión cada campista debe tener:**
1. **Página personal estilizada** con:
   - Paleta de colores consistente
   - Tipografía professional
   - Aplicación correcta del box model
   - Al menos 5 selectores diferentes utilizados

2. **Experimentos CSS** en CodePen:
   - Ejemplo de cada tipo de selector
   - Paleta de colores personalizada
   - Ejercicios de box model

---

## 🔄 **SEGUIMIENTO Y RETROALIMENTACIÓN**

### **Durante la sesión:**
- Check-ins cada 30 minutos
- Ayuda personalizada en breakout rooms
- Resolución de dudas en tiempo real

### **Al finalizar:**
- Presentación de 2-3 páginas destacadas (5 min)
- Feedback grupal constructivo
- Preview de la próxima sesión (CSS Layout)

### **Tarea opcional para practicar:**
- Experimentar con más propiedades CSS
- Buscar 3 sitios web con diseños que les gusten y analizar por qué
- Preparar dudas específicas para la próxima sesión

---

## 💡 **CONSEJOS PARA EL INSTRUCTOR**

- **Mantener energía alta:** Usar ejemplos visuales llamativos
- **Fomentar experimentación:** "No hay forma incorrecta de aprender CSS"
- **Celebrar errores:** Los bugs CSS son oportunidades de aprendizaje
- **Crear ambiente colaborativo:** Animar a que se ayuden entre sí
- **Documentar progreso:** Tomar screenshots del antes/después

---

## 📊 **RECURSOS ADICIONALES**

### **Para profundizar:**
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)

### **Inspiración de diseño:**
- [Dribbble](https://dribbble.com/)
- [Awwwards](https://www.awwwards.com/)
- [CodePen Picks](https://codepen.io/picks/)

### **Herramientas útiles:**
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Validar código CSS
- [Specificity Calculator](https://specificity.keegan.st/) - Calcular especificidad

---

## 🎯 **CHECKLIST DE LA SESIÓN**

### **Pre-sesión:**
- [ ] Preparar ejemplos de código en CodePen
- [ ] Verificar funcionamiento de herramientas online
- [ ] Crear breakout rooms si es necesario
- [ ] Tener backup de actividades por si hay problemas técnicos

### **Durante la sesión:**
- [ ] Tomar asistencia y estado de ánimo inicial
- [ ] Documentar preguntas frecuentes
- [ ] Capturar pantalla de mejores trabajos
- [ ] Anotar campistas que necesitan apoyo adicional

### **Post-sesión:**
- [ ] Compartir enlaces y recursos mencionados
- [ ] Enviar resumen de la sesión
- [ ] Preparar material de la próxima sesión basado en el progreso observado
- [ ] Revisar y responder dudas pendientes

---

*Bootcamp Desarrollo Web Full Stack - Sesión 3 de 25*
*Próxima sesión: CSS Layout (Flexbox y Posicionamiento)*