const checkLength = function (str, num) {
  return str.length > num;
};

const isPalindrome = function (str) {
  const startedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = startedStr.length - 1; i >= 0; i--) {
    reversedStr += startedStr[i];
  }

  return startedStr === reversedStr;
};

checkLength('Привет', 3);
isPalindrome('тоПОТ');
