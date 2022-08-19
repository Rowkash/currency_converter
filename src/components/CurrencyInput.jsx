import React from "react";

const CurrencyInput = (props) => {
  return (
    <div className="flex">
      <input
        className="mr-5 mb-5 bg-gray-50 border-0 border-b-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-blue-100"
        type="text"
        value={props.amount}
        onChange={(event) => props.onAmountChange(event.target.value)}
        placeholder="Enter the value"
      />

      <select
        className="h-12 block py-2.5 px-0 w-20 text-center text-sm text-gray-500 bg-transparent border-b-4 rounded-lg border-gray-300 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer hover:bg-blue-200"
        value={props.currency}
        onChange={(event) => props.onCurrencyChange(event.target.value)}
      >
        {props.currencies.map((currency) => (
          <option className="min-h-5" key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
