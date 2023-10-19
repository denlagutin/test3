function countWords(sentence) {
    // Удалим лишние пробелы в начале и конце строки
    sentence = sentence.trim();
  
    const words = sentence.split(' ');
  
    const filteredWords = words.filter(word => word !== '');
  
    return filteredWords.length;
  }
  
  const sentence = "Здараво, как у тебя дела дружище";
  const wordCount = countWords(sentence);
  console.log(wordCount); // Выводит: 5, если будет другое предложение будет другой результат, учтите что первое слово не учитывается ,если было предложение без запятой то тогда ответ был 6