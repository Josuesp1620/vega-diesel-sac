import React from 'react';

const IconList = () => {
  const icons = [];
  
  for (let i = 1; i <= 200; i++) {
    icons.push(<i key={i} className={`icon-${i}`}></i>);
  }

  return (
    <div>
      {icons}
    </div>
  );
};

export default IconList;
