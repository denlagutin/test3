function calculateRectangleProperties(width, height) {
    const perimeter = 2 * (width + height); // Формула периметра
    const area = width * height; // Формула площади
  
    const rectangleProperties = {
      perimeter: perimeter,
      area: area
    };
  
    return rectangleProperties;
  }
  
  const width = 15; // Тут пишем ширину прям.
  const height = 10; // Тут пишем высоту прям.
  const rectangleProperties = calculateRectangleProperties(width, height); // Вычисляем периметр и площадь
  console.log(rectangleProperties)