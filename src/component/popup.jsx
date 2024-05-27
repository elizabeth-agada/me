import React from 'react';

function Popup({ onClose, children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-md max-w-md w-full mx-auto">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
