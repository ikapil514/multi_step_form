import { useState } from "react";

const options = [
  {
    id: "A",
    option: "3+ per day",
  },
  {
    id: "B",
    option: "1-2 per day",
  },
  {
    id: "C",
    option: "few per week",
  },
  {
    id: "D",
    option: "few per month",
  },
  {
    id: "E",
    option: "i don't schedule my todos",
  },
];

export default function FirstQuestion() {
  const getLocalStorage = localStorage.getItem("question1");
  const [selectedOptionValue, setselectedOptionValue] = useState(
    getLocalStorage || ""
  );
  function handleSelectedOption(item: any) {
    localStorage.setItem("question1", item.option);
    setselectedOptionValue(item.option);
  }

  return (
    <div>
      <div>
        <h3 className="form-headline">
          how many of your calendar a events are todos (no one else is invited)?
        </h3>
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
