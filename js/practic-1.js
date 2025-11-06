
window.addEventListener('load', () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask detected');
  } else {
    console.log('No ethereum provider found');
    // Можеш інжектити свій тут
  }
});
console.log(Number("5")); // 5");