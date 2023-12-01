import { useState, useEffect } from "react";

import "./style.css";
import { fetchExchange } from "@/api";
import CurrencyInput from "@/components/CurrencyInput";

const CurrecyExchange = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrensy1] = useState("UAH");
  const [currency2, setCurrensy2] = useState("USD");
  const [rate, setRate] = useState([]);

  const handleAmount1Change = (value) => {
    setAmount2(formatNumber((value * rate[currency2]) / rate[currency1]));
    setAmount1(value);
  };

  const handleCurrency1Change = (value) => {
    setAmount2(formatNumber((amount1 * rate[currency2]) / rate[value]));
    setCurrensy1(value);
  };

  const handleAmount2Change = (value) => {
    setAmount1(formatNumber((value * rate[currency1]) / rate[currency2]));
    setAmount2(value);
  };

  const handleCurrency2Change = (value) => {
    setAmount1(formatNumber((amount2 * rate[currency1]) / rate[value]));
    setCurrensy2(value);
  };

  useEffect(() => {
    fetchExchange().then((result) => setRate(result));
  }, []);

  useEffect(() => {
    if (!!rate) {
      handleAmount1Change(amount1);
    }
  }, [rate]);

  function formatNumber(number) {
    return number.toFixed(2);
  }

  return (
    <div className="container">
      <section className="exchange">
        <CurrencyInput
          onAmaontChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rate)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmaontChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rate)}
          amount={amount2}
          currency={currency2}
        />
      </section>
    </div>
  );
};

export default CurrecyExchange;
