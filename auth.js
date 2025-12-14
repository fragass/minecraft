// auth.js
function checkAuth() {
  const loggedIn = localStorage.getItem("loggedIn");
  const page = window.location.pathname.split("/").pop();
  if (!loggedIn && page !== "index.html") window.location.href = "index.html";
  if (loggedIn && page === "index.html") window.location.href = "main.html";
}

document.addEventListener("DOMContentLoaded", checkAuth);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass })
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "main.html";
    } else {
      alert("Usuário ou senha inválidos!");
    }
  });
});

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
