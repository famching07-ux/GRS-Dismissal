document.addEventListener("DOMContentLoaded", () => {

const loginBtn =
document.getElementById("loginBtn");

if (loginBtn) {

```
loginBtn.addEventListener(
  "click",
  login
);
```

}

});

async function login() {

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if (!username || !password) {

```
alert(
  "Please enter username and password."
);

return;
```

}

alert(
"Username: " + username +
"\nPassword: " + password
);

}
