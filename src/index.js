module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
   return false;
 } else {
   let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr.push(bracketsConfig[i].join(''));
  }
    let i = 0;
    while (i < arr.length) {
      if (str.indexOf(arr[i], 0) === -1 && i < arr.length) {
      i++;
      } else if (str.indexOf(arr[i], 0) >= 0) {
        str = str.split('');
str = str.slice( str.indexOf(arr[i], 0), str.indexOf((arr[i], 0) + 1) );
        str = str.join('');
           if (str === '') {
             return true;
           } else {
             return false;
           }
      } else {
          i++;
        } 
    }
  }
}

/*
второй аргумент - это массив. Раздели этот массив на элементы, и увидишь, что в каждом элементе есть две составляющие:
первая составляющая - это какой символ принимается за открывающуюся скобку, а второй - за закрывающуюся

вот пример: [['a', 'b'], ['c', 'd']]). это массив, состоящий из двух элементов. Первый элемент тебе говорит, что одна пара скобок - это буквы "a" и "b". Такая же ситуация с "с", "d".
То есть такая последовательность будет верна: abcd - тут мы открыли скобку "а" и её же закрыли буквой "b"
а такая последовательность - нет: acbd
*/