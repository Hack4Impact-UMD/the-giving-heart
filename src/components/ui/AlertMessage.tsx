"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "../../../node_modules/next/image";
import success_icon from "../../app/_images/success.svg"
import error_icon from "../../app/_images/error.svg";

interface AlertMessageProps {
  success: boolean; // false = use error message
  description: string; // gray text message on bottom of alert
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  success,
  description,
}) => {
  const [isVisible, setVisible] = useState(true);
  const highlightColor = success ? "bg-green-600" : "bg-red-600";

  const handleCloseClick = () => {
    setVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-0 left-0 right-0 w-full bg-white rounded-lg flex justify-between px-0`}
        >
          <div
            className={`w-1.5 ${highlightColor} rounded-tl-lg rounded-bl-lg`}
          ></div>
          <div className="flex-grow flex justify-between py-4 px-3">
            <Image src={success ? success_icon : error_icon} alt={success ? "success-icon" : "error-icon"}/>
            <div className="flex-col">
              <h1>
                <b>{success ? "Success!" : "Oops! Something went wrong."}</b>
              </h1>
              <h1 className="text-gray-600">{description}</h1>
            </div>
            <button type="button" onClick={handleCloseClick}>
              <img src="/_images/close.svg" alt="close-icon" />
            </button>
          </div>
          <div className="w-1.5 bg-white rounded-tr-lg rounded-br-lg"></div>
        </div>
      )}
    </>
  );
};

export default AlertMessage;
