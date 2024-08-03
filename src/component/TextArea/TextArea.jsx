import React, { useEffect, useState } from "react";
import "./text.scss";
const Text = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Type something here...",
    "Another command...",
    "React is awesome!",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let interval;

    const type = () => {
      if (currentIndex < phrases.length) {
        currentText = phrases[currentIndex];
        setText(currentText.slice(0, currentText.length + 1));
      } else {
        currentIndex = 0;
        setText("");
      }
    };

    interval = setInterval(type, 1000); // Adjust the typing speed (milliseconds)

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typing-effect">
      <span>{text}</span>
    </div>
  );
};

export default Text;
