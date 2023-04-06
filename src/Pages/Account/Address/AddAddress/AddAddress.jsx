import { render } from "@testing-library/react";
import React, { useState } from "react";

function AddAddress() {
  return (
    <>
      <div className="container">
        <h1>Add address works!</h1>
      </div>
    </>
  );
}

render(<AddAddress />);
export default AddAddress;
