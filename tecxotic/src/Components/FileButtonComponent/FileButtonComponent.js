import React, { useState } from 'react';

const FileUploadButton = ({ handleFileUpload }) => {
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
    setFileInputKey(Date.now());
  };

  return (
    <div>
      <input
        type="file"
        key={fileInputKey}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
        ref={(fileInput) => (this.fileInput = fileInput)}
      />
      <button onClick={() => this.fileInput.click()}>Upload Image</button>
    </div>
  );
};

export default FileUploadButton;


