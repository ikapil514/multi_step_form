import { useState } from "react";

const options = [
  {
    id: "A",
    option: "just me",
  },
  {
    id: "B",
    option: "2-10",
  },
  {
    id: "C",
    option: "11-25",
  },
  {
    id: "D",
    option: "26-50",
  },
  {
    id: "E",
    option: "51-100",
  },
  {
    id: "F",
    option: "101-250",
  },
  {
    id: "G",
    option: "251-500",
  },
  {
    id: "H",
    option: "500+",
  },
];

export default function ThirdQuestion() {
  const getLocalStorage = localStorage.getItem("question3");
  const [selectedOptionValue, setselectedOptionValue] = useState(
    getLocalStorage || ""
  );
  function handleSelectedOption(item: any) {
    localStorage.setItem("question3", item.option);
    setselectedOptionValue(item.option);
  }
  return (
    <div>
      <div>
        <h3 className="form-headline">how big is your company?</h3>
        {options.map((item, idx) => (
          <button
            key={idx}
            className={
              selectedOptionValue === item.option
                ? "options-selected"
                : "options-btn"
            }
            onClick={() => handleSelectedOption(item)}
          >
            <div
              className={
                selectedOptionValue === item.option
                  ? "options-selected-id"
                  : "options-id"
              }
            >
              {item.id}
            </div>
            <div className="font-medium text-gray-700">{item.option}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
