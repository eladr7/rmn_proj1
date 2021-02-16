import React, {MouseEvent} from 'react';

export interface DummyProps {
  label: string,
  onClick: (event: MouseEvent) => void
}

/**
 * Primary UI component for user interaction
 */
export const Dummy: React.FC<DummyProps> = ({
  label,
  onClick
}) => {
  return (
    <div className="text-gray-300" onClick={onClick}>{label}</div>
  );
};
