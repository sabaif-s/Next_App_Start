import React from 'react';

function Servers() {
  if (typeof window == 'undefined') {
    // This will only run on the server during SSR
    console.log("from server");
  }

  return (
    <div>Servers</div>
  );
}

export default Servers;
