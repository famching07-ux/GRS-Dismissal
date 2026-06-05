alert("APP LOADED");
console.log("APP.JS LOADED");
const API_URL =
"https://script.google.com/a/macros/goldencharter.org/s/AKfycbwJFGxjlBKn9Sw783Aw6J4In9lae6_763_wGTdJJKcCwLWyTtYxzYi5cIHULDmuew-P/exec";

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM LOADED");

  const btn =
    document.getElementById("addStudentBtn");

  console.log("BUTTON:", btn);

  if (btn) {

    console.log("EVENT ATTACHED");

    btn.addEventListener(
      "click",
      addStudent
    );
  }
});

async function addStudent() {

  alert("Button Clicked");

  const name =
    document.getElementById("studentName").value;

  const grade =
    document.getElementById("grade").value;

  alert("Name = " + name);
  alert("Grade = " + grade);

  const url =
    API_URL +
    "?action=addStudent" +
    "&name=" + encodeURIComponent(name) +
    "&grade=" + encodeURIComponent(grade);

  alert(url);

  try {

    const response = await fetch(url);

    alert("Fetch Returned");

    const text = await response.text();

    alert(text);

  } catch(err) {

    alert("ERROR: " + err);

    console.error(err);
  }
}