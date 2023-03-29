import React, { useState } from "react";
import "./UploadFile.css";

export default function FileUploader(props) {
    const handleFileUpload = (e) => {
      const uploadedFile = e.target.files[0];
      props.onUpload(uploadedFile);
    };
  
    return (
      <div className="fileUploadContainer">
        <input type="file" onChange={handleFileUpload} />
      </div>
    );
  }