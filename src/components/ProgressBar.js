import React, { useState } from 'react';

const EditableProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="w-full h-4 bg-gray-200 rounded">
      <div className="h-full bg-blue-500 rounded" style={{ width: `${progress}%` }}></div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="mt-2"
      />
    </div>
  );
};

export default EditableProgressBar;
