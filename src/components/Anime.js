import React from 'react';
  
const Topdiez = (props) => {
  const { topdiez } = props;
  return (
    <div>
      <div>
        {topdiez.nombre} ({topdiez.description})
      </div>
    </div>
  );
};

export default Topdiez;