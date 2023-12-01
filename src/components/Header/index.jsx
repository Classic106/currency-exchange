import React, { useState, useEffect } from "react";

import "./style.css";
import { fetchExchange } from "@/api";

const Currency = () => {
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    fetchExchange().then((result) => setCurrency(result));
  }, []);

  return (
    <section className="currency">
      <div className="headerContainer">
        <ul className="headerInfo">
          {Object.entries(currency).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default Currency;
