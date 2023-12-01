import "./style.css";

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmaontChange,
  onCurrencyChange,
}) => {
  return (
    <div className="container">
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmaontChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
