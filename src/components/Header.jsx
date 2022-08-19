import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchUSD();
    fetchEUR();
  }, []);

  const fetchUSD = async () => {
    try {
      const res = await axios.get(
        `https://api.exchangerate.host/convert?from=USD&to=UAH&places=2`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEUR = async () => {
    try {
      const res = await axios.get(
        `https://api.exchangerate.host/convert?from=EUR&to=UAH&places=2`
      );
      setData2(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex  items-center justify-around h-16 m-auto border-0 shadow-md bg-emerald-100">
      <h1 className="font-extrabold text-lg">exchangerate.host</h1>
      <div className="flex">
        <h2 className="italic mx-5">USD to UAH {data.result}</h2>
        <h2 className="italic mr-5">EUR to UAH {data2.result}</h2>
        <span>Last update: {data.date}</span>
      </div>
    </header>
  );
};

export default Header;
