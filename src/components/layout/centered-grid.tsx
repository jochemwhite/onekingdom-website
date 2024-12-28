import React from 'react';

interface GridProps {
  children: React.ReactNode;
}

const CenteredGrid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center">
      {children}
    </div>
  );
};

export default CenteredGrid;
