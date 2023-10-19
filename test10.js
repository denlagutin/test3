function generateRandomEquation() {
    // Генерация случайных чисел a, b и c
    const a = Math.floor(Math.random() * 11); // число от 1 до 10 или можно const a = Math.floor(Math.random() * 10) + 1);
    const b = Math.floor(Math.random() * 11); // число от 1 до 10
    const c = Math.floor(Math.random() * 31); // число от 11 до 30
  
    const equation = `${a}x + ${b} = ${c}`;
  
    return equation;
  }
  
  const randomEquation = generateRandomEquation();
  console.log(randomEquation); // В моем случае получилось 7x + 3 = 21 а так в целом любое уравнение