import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [usdUpdate, setUsdUpdate] = useState([]);
  const [euroUpdate, setEuroUpdate] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/convert?from=USD&to=UAH&places=2`)
      .then((res) => setUsdUpdate(res.data));

    axios
      .get(`https://api.exchangerate.host/convert?from=EUR&to=UAH&places=2`)
      .then((res) => setEuroUpdate(res.data));
  }, []);

  return (
    <header className="flex  items-center justify-around h-16 m-auto border-0 shadow-md bg-emerald-100">
      <h1 className="font-extrabold text-lg">exchangerate.host</h1>
      <div className="flex">
        <h2 className="italic mx-5">USD to UAH {usdUpdate.result}</h2>
        <h2 className="italic mr-5">EUR to UAH {euroUpdate.result}</h2>
        <span>Last update: {usdUpdate.date}</span>
      </div>
    </header>
  );
};

export default Header;
