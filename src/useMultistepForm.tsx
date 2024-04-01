import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
  const [curremtStepIndex, setCurremtStepIndex] = useState(0);

  function handleNextBtn() {
    setCurremtStepIndex((currentPage) => {
      if (currentPage >= steps.length - 1) return currentPage;
      else return currentPage + 1;
    });
  }

  function handleBackBtn() {
    setCurremtStepIndex((currentPage) => {
      if (currentPage <= 0) return 0;
      else return currentPage - 1;
    });
  }

  return {
    curremtStepIndex,
    step: steps[curremtStepIndex],
    handleNextBtn,
    handleBackBtn,
    steps,
  };
}
