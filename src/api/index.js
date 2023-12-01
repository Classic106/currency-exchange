import axios from "axios";

const config = {
  headers: {
    apikey: process.env.REACT_APP_APIKEY,
  },
};

const fetchExchange = () => {
  return axios
    .get(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,GBP,EUR,USD&base=UAH",
      config
    )
    .then(({ data }) => data.rates)
    .catch((error) => console.log("error", error));
};

export { fetchExchange };
