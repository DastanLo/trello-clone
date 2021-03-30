import React, {memo} from 'react';

import './Spinner.css';
import Backdrop from "../Backdrop/Backdrop";

const Spinner = memo((props) => {
  return (
    <>
      <Backdrop show={true}/>
      <div className="loader">Loading...</div>
    </>
  );
});

export default Spinner;
