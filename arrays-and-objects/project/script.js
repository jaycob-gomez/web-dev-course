const students = [];

function addStudent(name, grade) {
  students.push({
    name,
    grade,
  });
}

function removeStudent(name) {
  const index = students.findIndex((student) => student.name === name);
  if (index !== -1) {
    // If the student is found, remove them from the array
    students.splice(index, 1);
    console.log(`Removed student: ${name}`);
  } else {
    console.log(`Student not found: ${name}`);
  }
}

function filterTopStudents(minGrade) {
  return students.filter((student) => student.grade >= minGrade);
}

function formatStudents() {
  return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const grades = [85, 92, 78, 88, 95];

for (let i = 0; i < names.length; i++) {
  addStudent(names[i], grades[i]);
}

console.log(formatStudents());
console.log("Top students", filterTopStudents(90));

removeStudent("Charlie");
console.log(formatStudents());