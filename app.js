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

alert("Name: " + name);
alert("Grade: " + grade);

}
