import "./toggle.css";

function Toggle({ dark }) {
  return (
    <>
      <div
        className="toggle"
        style={
          dark ? { backgroundColor: "rgba(0, 0, 0, 0.75)", color: "#FFF" } : {}
        }
      >
        <div className="info">
          <div className="right">
            <div className="one-div">
              <h3>CURRENT TIMEZONE</h3>
              <h2>Europe/London</h2>
            </div>
            <div className="one-div">
              <h3>Day of the year</h3>
              <h2>295</h2>
            </div>
          </div>
          <div className="line"></div>
          <div className="left">
            <div className="one-div">
              <h3>Day of the week</h3>
              <h2>5</h2>
            </div>
            <div className="one-div">
              <h3>Week number</h3>
              <h2>42</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toggle;
