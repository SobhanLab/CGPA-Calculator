const gradePoints = {
  "A+": 4.0,
  "A": 3.75,
  "A-": 3.5,
  "B+": 3.25,
  "B": 3.0,
  "B-": 2.75,
  "C+": 2.5,
  "C": 2.25,
  "D": 2.0,
  "F": 0.0
};

function loadCourses() {
  const sem = document.getElementById("semester").value;
  const coursesDiv = document.getElementById("courses");
  coursesDiv.innerHTML = "";

  syllabus[sem].forEach((course, index) => {
    coursesDiv.innerHTML += `
      <div>
        ${course.name} (${course.credit})
        <select id="grade-${index}">
          ${Object.keys(gradePoints).map(g => `<option>${g}</option>`).join("")}
        </select>
      </div>
    `;
  });
}

function calculateCGPA() {
  const sem = document.getElementById("semester").value;
  let totalCredits = 0;
  let totalPoints = 0;

  syllabus[sem].forEach((course, index) => {
    const grade = document.getElementById(`grade-${index}`).value;
    const point = gradePoints[grade];

    totalCredits += course.credit;
    totalPoints += course.credit * point;
  });

  const cgpa = totalPoints / totalCredits;

  document.getElementById("result").innerText =
    "Your CGPA: " + cgpa.toFixed(2);
}
