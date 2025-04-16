
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

        

    });

    

}