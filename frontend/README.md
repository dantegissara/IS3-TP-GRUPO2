# Parche de autenticación y sincronización LocalStorage

Este paquete contiene **solo** los archivos nuevos necesarios para añadir:

* Login simple (usuario: `admin`, contraseña: `1234`)
* Protección y sincronización entre pestañas usando `localStorage`

## Archivos incluidos

| Ruta | Descripción |
|------|-------------|
| `login.html` | Página de login |
| `js/auth.js` | Lógica de autentificación y sincronización |
| `styles/login.css` | Hoja de estilos opcional para el login |

## Cómo integrarlo

1. Descomprimí tu frontend original en alguna carpeta.
2. Copiá el **contenido** de este ZIP dentro de esa misma carpeta, conservando la estructura.
3. En cada página que quieras proteger (por ejemplo `index.html`, `gastos.html`, etc.), añadí justo dentro de `<head>` lo siguiente:

```html
<script type="module">
  import {{ requireLogin }} from './js/auth.js';
  requireLogin();
</script>
```

> **Tip:** Si muchas páginas comparten la misma plantilla, hacelo una sola vez allí.

4. Abrí `login.html` para iniciar sesión. Luego podrás navegar al resto.

### Añadir un botón de logout

```html
<button onclick="import('./js/auth.js').then(m => m.logout())">Salir</button>
```

Todo funciona en puro frontend, sin servidor backend. 🔒