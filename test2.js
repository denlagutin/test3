function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32; // Формула эквивалента в градусах Фаренгейта
    return fahrenheit;
  }
  
  const celsius = 25; // В данной строке пишем градусы,вы можете выбрать любое число
  const fahrenheit = celsiusToFahrenheit(celsius); // Вычисляем эквивалент в градусах Фаренгейта
  console.log(fahrenheit);