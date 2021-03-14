module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
   return false;
 } else {
   let open = [];
   let close = [];
   for (let i = 0; i < bracketsConfig.length; i++) {
     open.push(bracketsConfig[i][0]);
     close.push(bracketsConfig[i][1]);   
     
   }
    console.log(open);
     console.log(close);
    
    let i = 0;
    let count = 0;
    if (!open.includes(str[0])) {
          return false;
        } 
    while (i < str.length) {    
      if (close.includes(str[i]) && open.includes(str[i])) {
        let closeBr = open.indexOf(str[count-1]);
        if (close[closeBr] === str[i]) {
          console.log(str);
          let substr = str.substring(i-1, i+1);
          console.log(substr);
          str = str.replace(substr, '');
          console.log(str);
          //count--;
          count--;
          i--;
          console.log(i);
          console.log(count);
          console.log();
        
        } else if (open.includes(str[i])) {
          console.log(str[i]);
          console.log(count);
          i++;
          count++;
        } 
      } else if (open.includes(str[i])) {
        console.log(str[i]);
        console.log(count);
        i++;
        count++;
      } else if (close.includes(str[i])) {
        //console.log(str);
        //if (str[i - (i - (count - 1))] === str[i]) {
        console.log();
        console.log(count);
        console.log(i);
        console.log(str[i]);
        console.log();
        
        let closeBr = open.indexOf(str[count-1]);
        if (close[closeBr] === str[i]) {
          console.log(str);
          let substr = str.substring(i-1, i+1);
          console.log(substr);
          str = str.replace(substr, '');
          console.log(str);
          //count--;
          count--;
          i--;
          console.log(i);
          console.log(count);
          console.log();
        
        } else {
        return false;
      }
        
      } else {
        return false;
      }
      
    }  
    return true;
  }
} 


/*
второй аргумент - это массив. Раздели этот массив на элементы, и увидишь, что в каждом элементе есть две составляющие:
первая составляющая - это какой символ принимается за открывающуюся скобку, а второй - за закрывающуюся

вот пример: [['a', 'b'], ['c', 'd']]). это массив, состоящий из двух элементов. Первый элемент тебе говорит, что одна пара скобок - это буквы "a" и "b". Такая же ситуация с "с", "d".
То есть такая последовательность будет верна: abcd - тут мы открыли скобку "а" и её же закрыли буквой "b"
а такая последовательность - нет: acbd
*/