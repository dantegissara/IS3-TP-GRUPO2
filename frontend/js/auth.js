
// auth.js

function getUsers() {
  return JSON.parse(localStorage.getItem("usuarios") || "{}");
}

function saveUsers(users) {
  localStorage.setItem("usuarios", JSON.stringify(users));
}

export function login(event) {
   event.preventDefault();
  const user = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const users = getUsers();

  // Manejar ambos formatos (antiguo y nuevo)
  if (users[user]) {
    const storedPass = typeof users[user] === 'string' ? users[user] : users[user].password;
    
    if (storedPass === pass) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", user);
      window.location.href = "inicio.html";
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Usuario no encontrado");
  }
}

export function register(event) {
  event.preventDefault();
  const user = document.getElementById("registerUsername").value.trim();
  const pass = document.getElementById("registerPassword").value.trim();
  const users = getUsers();

  if (users[user]) {
    alert("El usuario ya existe.");
  } else {
    users[user] = {
      password: pass,
      email: "",
      telefono: "",
      // Puedes agregar más campos aquí
    };
    saveUsers(users);
    localStorage.setItem(`credito_${user}`, 0);
    alert("Registro exitoso. Ahora puede iniciar sesión.");
  }
}

export function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

export function requireLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// Registrar eventos al cargar
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  if (loginForm) loginForm.addEventListener("submit", login);
  if (registerForm) registerForm.addEventListener("submit", register);
});
