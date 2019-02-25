const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents =  function(){
  PubSub.subscribe('Prime: result', (event) => {
    const primeNumbers = event.detail;
    console.log(primeNumbers);
    this.displayResult(primeNumbers)
  });
};





ResultView.prototype.displayResult = function(result){
  const outputResult = document.querySelector('#result');
  outputResult.textContent = result
};



module.exports = ResultView;
