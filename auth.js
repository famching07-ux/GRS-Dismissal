const API_URL =
"https://script.google.com/a/macros/goldencharter.org/s/AKfycbwJFGxjlBKn9Sw783Aw6J4In9lae6_763_wGTdJJKcCwLWyTtYxzYi5cIHULDmuew-P/exec";

document.addEventListener("DOMContentLoaded", () => {

const loginBtn =
document.getElementById("loginBtn");

if (loginBtn) {

loginBtn.addEventListener(
  "click",
  login
);

}

});

async function login() {

const username =
document.getElementById("username").value.trim();

const password =
document.getElementById("password").value.trim();

if (!username || !password) {

alert(
  "Please enter username and password."
);

return;

}

const url =
API_URL +
"?action=login" +
"&username=" +
encodeURIComponent(username) +
"&password=" +
encodeURIComponent(password);

try {

const response =
  await fetch(url);

const data =
  await response.json();

if (!data.success) {

  alert(
    data.message
  );

  return;
}

localStorage.setItem(
  "grsUser",
  JSON.stringify(data)
);

if (data.role === "admin") {

  window.location.href =
    "admin.html";

  return;
}

if (data.role === "teacher") {

  window.location.href =
    "teacher.html";

  return;
}

if (data.role === "receptionist") {

  window.location.href =
    "receptionist.html";

  return;
}

alert(
  "Unknown role."
);

} catch (err) {

console.error(err);

alert(
  "Unable to contact server."
);

}

}
