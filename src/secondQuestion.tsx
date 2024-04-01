import { useState } from "react";

const options = [
  {
    id: "A",
    option: "student",
  },
  {
    id: "B",
    option: "sales",
  },
  {
    id: "C",
    option: "marketing",
  },
  {
    id: "D",
    option: "desgin",
  },
  {
    id: "E",
    option: "venture capital",
  },
  {
    id: "F",
    option: "engineering",
  },
  {
    id: "G",
    option: "founder",
  },
  {
    id: "H",
    option: "product",
  },
  {
    id: "I",
    option: "accounting/finance",
  },
  {
    id: "J",
    option: "recruiting",
  },
  {
    id: "K",
    option: "others",
  },
];

export default function SecondQuestion() {
  const getLocalStorage = localStorage.getItem("question2");
  const [selectedOptionValue, setselectedOptionValue] = useState(
    getLocalStorage || ""
  );
  function handleSelectedOption(item: any) {
    localStorage.setItem("question2", item.option);
    setselectedOptionValue(item.option);
  }
  return (
    <div>
      <div>
        <h3 className="form-headline">what kind of work do you do?</h3>
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
