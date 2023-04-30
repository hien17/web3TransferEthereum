import React, { useState } from "react";

const MyForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // show the confirmation form
  };

  const handleCancel = () => {
    setShowConfirmation(false); // hide the confirmation form
  };

  const handleConfirm = () => {
    // handle form submission
    setShowConfirmation(false); // hide the confirmation form
  };

  return (
    <div>
      {!showConfirmation ? (
        <form onSubmit={showSubmit}>
          {/* form inputs */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Are you sure you want to submit the form?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
};

export default MyForm;
