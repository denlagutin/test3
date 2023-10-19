function calculateBalance(incomes, expenses) {
    const incomeList = incomes.split(',').map(Number);
    const expenseList = expenses.split(',').map(Number);
    
    const totalIncome = incomeList.reduce((sum, income) => sum + income, 0);
    const totalExpense = expenseList.reduce((sum, expense) => sum + expense, 0);
    
    return totalIncome - totalExpense;
  }

  const incomes = "100,200,300";
  const expenses = "50,75,100"; // 100 - 50 =50 + 200 - 75 = 125 + 300 - 100 = 200 == 200 + 50 + 125 = 375 
  const balance = calculateBalance(incomes, expenses);
  console.log(balance); // Ответ 375