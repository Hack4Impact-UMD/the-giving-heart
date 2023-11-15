import React from 'react';

interface AlertMessageProps {
  success: boolean; // false = use error message
}

const AlertMessage: React.FC<AlertMessageProps> = ({ success }) => {
  const highlightColor = success ? 'bg-green-600' : 'bg-red-600'; // bar color depends on status
  const iconSrc = success ? '/_images/success.svg' : '/_images/error.svg'; /// icon depends on status

  return (
    <div className={`w-full bg-white rounded-lg flex justify-between px-0`}>
      {/* Highlight bar on the left */}
      <div className={`w-1.5 ${highlightColor} rounded-tl-lg rounded-bl-lg`}></div>
      <div className="flex-grow flex justify-between py-4 px-3">
        <img src={iconSrc} alt={success ? 'success-icon' : 'error-icon'} />
        {/* alert message text here */}
        <div className="flex-col">
          <h1><b>{success ? 'Success!' : 'Oops! Something went wrong.'}</b></h1>
          <h1 className="text-gray-600">{success ? 'You have signed up for this event.' : 'Please try again.'}</h1>
        </div>
        <img src="/_images/close.svg" alt="close-icon" />
      </div>
      {/* Make white div to match spacing of the component with the left green/red div */}
      <div className="w-1.5 bg-white rounded-tr-lg rounded-br-lg"></div>
    </div>
  );
};

export default AlertMessage;
