function calculateAverageGrade(grades) {
    const gradeArray = grades.split(',').map(Number);
    const totalGrades = gradeArray.length;
    const sumGrades = gradeArray.reduce((acc, curr) => acc + curr, 0);
  
    const averageGrade = sumGrades / totalGrades;
  
    return averageGrade;
  }
  
  const grades = "8, 7, 9, 5, 10, 6, 1, 2, 6";
  const average = calculateAverageGrade(grades);
  console.log(average); // Выводит: 6

  // также момжно решить: смотреть в task9,2.js

  