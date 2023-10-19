function calculateDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100; // Вычисляем сумму скидки(формула)
    const finalPrice = price - discountAmount; // Вычисляем сумму с учетом скидки
    return finalPrice;
  }
  
  const price = 1000; // Цена товара например на пельмени царские 1000 рублей:)
  const discountPercentage = 20; // зашел в петерочку а там скидка на пельмени напрмер 20%
  const finalPrice = calculateDiscount(price, discountPercentage); // Вычисляем сумму с учетом скидки
  console.log(finalPrice); // Сумма на данные пельмени выйдут в целых 800 , просто ашалеть