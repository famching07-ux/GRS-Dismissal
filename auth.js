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

  alert(
    "Next step: Google Login"
  );

}
