const API_URL =
"https://script.google.com/a/macros/goldencharter.org/s/AKfycbwJFGxjlBKn9Sw783Aw6J4In9lae6_763_wGTdJJKcCwLWyTtYxzYi5cIHULDmuew-P/exec";

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("addStudentBtn");

  if (btn) {
    btn.addEventListener("click", addStudent);
  }

});

async function addStudent() {

  const name =
    document.getElementById("studentName").value;

  const grade =
    document.getElementById("grade").value;

  if (!name) {
    alert("Enter Student Name");
    return;
  }

  const url =
    API_URL +
    "?action=addStudent" +
    "&name=" + encodeURIComponent(name) +
    "&grade=" + encodeURIComponent(grade);

  alert("Calling API...");

  try {

    const response = await fetch(url);

    const text = await response.text();

    alert("API Response:");
    alert(text);

  } catch(err) {

    console.error(err);

    alert("ERROR:");
    alert(err);

  }

}
