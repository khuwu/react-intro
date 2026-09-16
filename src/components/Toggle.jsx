import { useState } from "react";

function Toggle() {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="week7-card">
      <h2>Toggle Component</h2>

      <button onClick={handleToggle}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && (
        <p>This message is now visible!</p>
      )}
    </div>
  );
}

export default Toggle;