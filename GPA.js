// Grading scale
const grades = {
    'A': 5,
    'B': 4,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 0
};


// Course data: [units, grade]
const courses = [
    [parseInt(document.getElementById("unit1").value), document.getElementById("grade1").value],
    [parseInt(document.getElementById("unit2").value), document.getElementById("grade2").value],
    [parseInt(document.getElementById("unit3").value), document.getElementById("grade3").value],
    [parseInt(document.getElementById("unit4").value), document.getElementById("grade4").value],
    [parseInt(document.getElementById("unit5").value), document.getElementById("grade5").value],
    [parseInt(document.getElementById("unit6").value), document.getElementById("grade6").value],
    [parseInt(document.getElementById("unit7").value), document.getElementById("grade7").value],
    [parseInt(document.getElementById("unit8").value), document.getElementById("grade8").value],
    [parseInt(document.getElementById("unit9").value), document.getElementById("grade9").value],
    // [parseInt(document.getElementById("unit10").value), document.getElementById("grade10").value],
    // [parseInt(document.getElementById("unit11").value), document.getElementById("grade11").value],
    // [parseInt(document.getElementById("unit12").value), document.getElementById("grade12").value],
    // [parseInt(document.getElementById("unit13").value), document.getElementById("grade13").value]
];

function calculateGPA() {
    let totalUnits = 0;
    let totalPoints = 0;

    courses.forEach(course => {
        const [units, grade] = course;
        totalUnits += units;
        totalPoints += units * grades[grade];
    });

    const gpa = totalPoints / totalUnits;

    document.getElementById('gpa-result').innerHTML = `Your GPA is: ${gpa.toFixed(2)}`;
}
