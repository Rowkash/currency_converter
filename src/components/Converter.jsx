import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import Loader from "./Loader";

const Converter = () => {
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("UAH");
  const [rates, setRates] = useState([]);

  // Mojno oshibki obrabotat

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    return await axios
      .get("https://api.exchangerate.host/latest?places=2")
      .then((res) => setRates(res.data.rates));
  };

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmountFirstChange(1);
      }
      init();
    }
  }, [rates]);

  function roundUp(number) {
    return number.toFixed(2);
  }

  const handleAmountFirstChange = (firstAmount) => {
    setSecondAmount(
      roundUp((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstAmount(firstAmount);
  };

  const handleCurrencyFirstChange = (firstCurrency) => {
    setSecondAmount(
      roundUp((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstCurrency(firstCurrency);
  };

  const handleAmountSecondChange = (secondAmount) => {
    setFirstAmount(
      roundUp((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondAmount(secondAmount);
  };

  const handleCurrencySecondChange = (secondCurrency) => {
    setFirstAmount(
      roundUp((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondCurrency(secondCurrency);
  };

  return (
    <section className="flex flex-col justify-center ">
      {rates.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-col mx-auto mt-5 items-center">
          <CurrencyInput
            onAmountChange={handleAmountFirstChange}
            onCurrencyChange={handleCurrencyFirstChange}
            currencies={Object.keys(rates)}
            amount={firstAmount}
            currency={firstCurrency}
          />

          <CurrencyInput
            onAmountChange={handleAmountSecondChange}
            onCurrencyChange={handleCurrencySecondChange}
            currencies={Object.keys(rates)}
            amount={secondAmount}
            currency={secondCurrency}
          />
        </div>
      )}
    </section>
  );
};

export default Converter;
