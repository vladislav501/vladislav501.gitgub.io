// Функция для расчета значения у по формуле y = (|x|-2)/(x-1)
function calculateY(x) {
    try {
      if (x === 1) {
        throw "Ошибка: деление на ноль!";
      }      
      var y = (Math.abs(x) - 2) / (x - 1);
      return y;
    } catch (error) {
      alert(error);
    }
  }
  
  // Пример использования функции
  var x = -1;
  var result = calculateY(x);
  document.write("При x = " + x + ", значение y = " + result);
