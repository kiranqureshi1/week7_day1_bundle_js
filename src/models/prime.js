const PubSub = require('../helpers/pub_sub.js');


const Prime = function() {

};

Prime.prototype.bindEvents = function(){
  PubSub.subscribe('FormView: number submitted', (event) => {
    const inputtedNumber = event.detail;
    console.log('payload recieved in prime', inputtedNumber);
    const result = this.ifNumberIsPrime(inputtedNumber);
    console.log("prime numbers", result);
    PubSub.publish('Prime: result', result);
  });
};


Prime.prototype.ifNumberIsPrime = function (number) {
  if (number <= 1) {
    return 'not a prime number';
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "not a prime number";
    }
  }
  return "it is a prime number";
};

module.exports = Prime;
