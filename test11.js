function calculateEmployeeBonus(salary, performanceRating) {
    let bonusPercentage;
  
    if (performanceRating > 8) {
      bonusPercentage = 0.2; // 20% бонус
    } else {
      bonusPercentage = 0.1; // 10% бонус
    }
  
    const bonus = salary * bonusPercentage;
  
    return bonus;
  }
  
  const salary = 55690; // Зарплата ты можешь указать свое значение
  const rating = 10; // Брат твой рейтинг
  const bonusAmount = calculateEmployeeBonus(salary, rating);
  console.log(`${bonusAmount}`); // 11138 это твой бонус хорошо работал