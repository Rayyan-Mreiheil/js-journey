
function generateReports(students) {

    const studentsArray = []; // O(1) - Constant time to initialize the array

    students.forEach(person =>{ // O(n) - Loop over each student (n = number of students)

        const studentsObj = {
            name: "",
            average: "",
            grade: ""
        }; // O(1) - Constant time object creation

        // Get student name
        studentsObj.name = person.name; // O(1) - Accessing property

        // Find average score
        const personScores = person.scores; // O(1) - Constant time to assign reference
        let sum = 0;
        personScores.forEach(score => {
            sum += score // O(m) - Loop over each score (m = number of scores per student)
        })
        // Calculate average
        const avg = sum / personScores.length; // O(1) - Arithmetic calculation
        studentsObj.average = avg; // O(1)

        //  Find grade
        if (avg >= 90){
            studentsObj.grade = "A"; // O(1)
        } else if (avg >= 80){
            studentsObj.grade = "B"; // O(1)
        } else if (avg >= 70){
            studentsObj.grade = "C"; // O(1)
        }else if (avg >= 60){
            studentsObj.grade = "D"; // O(1)
        }else {
            studentsObj.grade = "F"; // O(1)
        }
        
        studentsArray.push(studentsObj); // O(1) - Inserting at end of array

    });

    return studentsArray; // O(1)

}


// Sample Input For Testing
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

  console.log(generateReports(students));