import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Toggle from "./components/Toggle/Toggle";
import DownArrow from "./assets/arrow-down.svg";
import UpArrow from "./assets/icon-arrow-up.svg";

function App() {
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState();

  useEffect(() => {
    const now = new Date().getHours();
    if (now > 7 && now < 19) {
      setDark(false);
      document.body.classList.remove("night");
    } else {
      setDark(true);
      document.body.classList.add("night");
    }
  }, []);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      {!show ? <Quote /> : <></>}
      <div className="clk">
        <Clock dark={dark} />
        <button onClick={toggle}>
          <span id="button-text">{!show ? "More" : "Less"}</span>
          {!show ? (
            <img src={DownArrow} alt="down-arr" />
          ) : (
            <img src={UpArrow} alt="down-arr" id="up" />
          )}
        </button>
      </div>
      {!show ? <></> : <Toggle dark={dark} />}
    </>
  );
}
export default App;
