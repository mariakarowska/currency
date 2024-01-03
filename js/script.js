{
  const calculateResult = (amount, currency) => {
    switch (currency) {
      case "EUR":
        return 4.46 * amount;

      case "USD":
        return 4.22 * amount;

      case "CHF":
        return 4.72 * amount;

      case "TRY":
        return 0.15 * amount;
    }
  };

  const onFormSubmit = (event) => {
    
      event.preventDefault();

      const resultElement = document.querySelector(".js-result");
      const amountElement = document.querySelector(".js-amount");
      const currencyElement = document.querySelector(".js-currency");

      const result = calculateResult(
        amountElement.value,
        currencyElement.value
      );

      resultElement.innerText = result.toFixed(2);
    };
  

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
