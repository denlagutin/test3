function calculateDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1; //   Разницу между координатами по оси X
    const yDistance = y2 - y1; //  Разницу между координатами по оси Y
  
    const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2); // Вычисляем расстояние по формуле
  
    return distance;
  }
  
  const x1 = 2; // Координата x1
  const y1 = 4; // Координата y2
  const x2 = 6; // Координата x2
  const y2 = 8; // Координата y2
  const distance = calculateDistance(x1, y1, x2, y2); // Вычисляем расстояние
  console.log(distance);