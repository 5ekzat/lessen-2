document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const root = document.getElementById('root');
  
    btn.addEventListener('click', function () {
      const inputValue = input.value.toLowerCase();
      const isPalindrome = checkPalindrome(inputValue);
      
      root.innerHTML = isPalindrome ? 'true' : 'false';
    });
  
    function checkPalindrome(str) {
      const cleanedStr = str.replace(/[^a-zа-я0-9]/gi, '');
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  });