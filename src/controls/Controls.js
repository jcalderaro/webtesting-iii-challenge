// -------------------------------------------------------------------------------------- //

import React from 'react';

// -------------------------------------------------------------------------------------- //

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button data-testid="toggle-locked" disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button data-testid="toggle-closed" disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

// -------------------------------------------------------------------------------------- //

export default Controls;

// -------------------------------------------------------------------------------------- // 
/* Changes

line 12: <button disabled={!closed} onClick={toggleLocked} className="toggle-btn"></button>

line 15: <button disabled={locked} onClick={toggleClosed} className="toggle-btn"> 

*/// -------------------------------------------------------------------------------------- //
