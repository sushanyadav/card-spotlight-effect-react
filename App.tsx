import * as React from 'react';
import './style.css';

export default function App() {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    currentTarget.style.setProperty('--pos-x', `${x}px`);
    currentTarget.style.setProperty('--pos-y', `${y}px`);
  };

  return (
    <div className="card" onMouseMove={onMouseMove}>
      <div className="content">Hover me</div>
    </div>
  );
}
