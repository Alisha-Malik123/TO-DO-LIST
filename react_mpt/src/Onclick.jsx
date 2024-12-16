import React, { useState } from 'react';
function Onclick() {
  const [state, setState] = useState('red'); 
 function submit() {
    if (state === 'red') {
      setState('blue');
    } else {
      setState('red');
    }
  }

  return (
    <div style={{ textAlign: 'center',  backgroundColor: state }} >
      <h1>Change Background Color</h1>
      <p>Click a button to change the background color:</p>
      <div>
        <button
        //   style={{ backgroundColor: state }}
          onClick={submit} 
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Onclick;
