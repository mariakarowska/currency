let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");

formElement.addEventListener ("submit", (event) =>{
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let result;

    switch (currency) {
        case "EUR":
          result = 4.46 * amount;
          break;
    
        case "USD":
          result = 4.22 * amount;
          break;
    
        case "CHF":
          result = 4.72 * amount;
          break;
    
        case "TRY":
          result = 0.15 * amount;
          break;
      }

      resultElement.innerText = result.toFixed(2);

});