function incomeTaxCalculator(income) {
    const taxRate = 0.15; // В данной части пишем процент налоговой ставки,в данном примере 15%
    const taxAmount = income * taxRate; // Вычисляем сумму налога
    return taxAmount;
  }
  
  const income = 100000; // Пример суммы дохода,это может абсолтно любое число
  const tax = incomeTaxCalculator(income); // Вычисляем налог
  console.log(tax); // ответ должен быть 15000