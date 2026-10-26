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

const isMeetingWithinWorkday = (startWork, endWork, startMeeting, duration) => {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const workStartMins = timeToMinutes(startWork);
  const workEndMins = timeToMinutes(endWork);
  const meetingStartMins = timeToMinutes(startMeeting);

  const meetingEndMins = meetingStartMins + duration;

  return meetingStartMins >= workStartMins && meetingEndMins <= workEndMins;
};

checkLength('Привет', 3);
isPalindrome('тоПОТ');
onlyNumbers('2023uuu');
isMeetingWithinWorkday('08:00', '17:30', '14:00', 90);
