//this component is from google, I just made some styling on it

import { useEffect, useState } from "react";
import "./scroll.css";

const ToBottom = () => {
  // The back-to-bottom button is appearing at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToBottom = () => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToBottom} className="back-to-top">
          Down
        </button>
      )}
    </>
  );
};

export default ToBottom;
