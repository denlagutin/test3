function calculateAverageGrade(grades) {
    const gradesArray = grades.split(',');
    // Переменные для суммирования оценок и подсчета количества оценок
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < gradesArray.length; i++) {
      // Преобразуем текущую оценку в число
      const grade = parseInt(gradesArray[i]);
      
      if (!isNaN(grade) && grade >= 1 && grade <= 10) {  //проверяем условия чтоб было больше и равно 1 но не мешьше и равно 10
        // Добавляем оценку к сумме и увеличиваем счетчик
        sum += grade;
        count++;
      }
    }
  
    // Вычисляем среднюю оценку
    const averageGrade = sum / count;
  
    // Возвращаем среднюю оценку с округлением до двух знаков после запятой,вы можете указать до целого числа или до тысячных
    return averageGrade.toFixed(2);
  }
  
  const grades = '8, 9, 7, 6, 5, 10, 1, 2, 3';
  const average = calculateAverageGrade(grades);
  console.log(average); // Выведет: 5.67 , если return averageGrade.toFixed(0);то ответ был 6