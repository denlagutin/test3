function reverseStringWithException(str, exception) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== exception) {
        words[i] = words[i].split('').reverse().join('');
      }
    }
  
    return words.reverse().join(' ');
  }

  const str = "Hello World"; // предложение
  const exception = "World"; //слово исключение
  const reversedString = reverseStringWithException(str, exception);
  console.log(reversedString); // World olleH

  // А если было предложение Привет Денис и слово исключение Денис то ответ: Денис тевирП