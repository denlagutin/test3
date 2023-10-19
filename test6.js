function calculateTime(distance, speed) {
    const time = distance / speed; // Формула нахождения время в часах
    const hours = Math.floor(time); // Округляем вниз до целого количества часов
    const minutes = Math.round((time - hours) * 60); // Вычисляем количество минут
  
    return `${hours}ч. ${minutes}м.`; // Возвращаем время в формате ХХч ХХм
  }
  
  const distance = 1555; // Расстояние в км ,вы можете вести любое значение
  const speed = 60; // Скорость в км/ч
  const travelTime = calculateTime(distance, speed); // Вычисляем время в пути
  console.log(travelTime);