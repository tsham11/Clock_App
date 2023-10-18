import React from "react";
import './quote.css'

function Quote() {
  return (
    <div className="quote">
      <p>
        “The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.”
      </p>
      <p style={{ fontWeight: "700"}}>Ada Lovelace</p>
    </div>
  );
}

export default Quote;
