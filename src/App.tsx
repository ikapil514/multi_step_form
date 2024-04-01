import "./App.css";
import useMultistepForm from "./useMultistepForm";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Homepage from "./homepage";
import FirstQuestion from "./firstQuestion";
import SecondQuestion from "./secondQuestion";
import ThirdQuestion from "./thirdQuestion";
import WorkEmailPage from "./workEmailPage";
import ThankyouPage from "./thankyouPage";
import { useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";

function App() {
  const { step, curremtStepIndex, handleBackBtn, handleNextBtn } =
    useMultistepForm([
      <div></div>,
      <Homepage />,
      <FirstQuestion />,
      <SecondQuestion />,
      <ThirdQuestion />,
      <WorkEmailPage />,
      <ThankyouPage />,
    ]);

  const changeButton = useMemo(() => {
    if (curremtStepIndex === 0) return "Continue";
    if (curremtStepIndex === 1) return "Let's Gooooo!";
    if (curremtStepIndex === 6) return null;
    return "Next";
  }, [curremtStepIndex]);

  const [email, setEmail] = useState("");
  const [helptext, setHelptext] = useState(false);
  const [name, setName] = useState("");

  function handleEmail(event: any) {
    event.preventDefault;
    const value = event.target.value;
    const emalValid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emalValid.test(value)) {
      setHelptext(true);
    } else {
      setHelptext(false);
    }
    setEmail(value);
  }

  function handleName(event: any) {
    event.preventDefault;
    setName(event.target.value);
  }

  useEffect(() => {
    if (curremtStepIndex === 6) {
      window.localStorage.clear();
    }
  }, [curremtStepIndex]);

  return (
    <div className="main-div">
      <h2 className="homepage-div font-semibold mb-16">Amie</h2>
      <div>
        {curremtStepIndex > 1 && curremtStepIndex < 6 && (
          <button
            className="flex items-center font-semibold text-gray-500"
            onClick={handleBackBtn}
          >
            <span className="mr-3">
              <FaArrowLeft color="#778899" />
            </span>
            Back
          </button>
        )}
      </div>
      {curremtStepIndex === 0 && (
        <form>
          <div>
            <h3 className="form-headline">
              what's your email? &#x1f48c; {"(only Gmail for now)*"}
            </h3>
            <p className="sub-heading italic">
              tip: use your personal email so you never lose access to Amie, you
              can add work email as sub-accounts.
            </p>
            <TextField
              placeholder="example@gmail.com"
              type="email"
              size="small"
              onChange={handleEmail}
            />
          </div>
          <div>
            <h3 className="form-headline">what's your first name?🎈*</h3>
            <p className="sub-heading">we also love nicknames!</p>
            <TextField
              size="small"
              placeholder="first name"
              required
              onChange={handleName}
              type="text"
            />
          </div>
        </form>
      )}
      {step}
      <div>
        {changeButton && (
          <button
            disabled={!(!!email && !!name && !helptext)}
            className="button-theme mt-10"
            onClick={handleNextBtn}
          >
            {changeButton}
            <span className="ml-3">
              <FaArrowRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
