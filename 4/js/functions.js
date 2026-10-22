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

const onlyNumbers = function (str) {
  let nums = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      nums += str[i];
    }
  }
  return parseInt(nums, 10);
};

checkLength('Привет', 3);
isPalindrome('тоПОТ');
onlyNumbers('2023uuu');
