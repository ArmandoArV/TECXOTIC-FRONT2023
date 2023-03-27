import React,{useState} from 'react';
import "./ComparatorContainer.css";
import FileUploadButton from '../FileButtonComponent/FileButtonComponent';

const ComparatorContainer = () => {
    const [imageUrls, setImageUrls] = useState([]);
  
    const handleFileUpload = (file) => {
      const reader = new FileReader();
  
      reader.addEventListener('load', () => {
        setImageUrls([...imageUrls, reader.result]); 
      });
  
      reader.readAsDataURL(file);
    };


function ComparatorContainer(){
    const [squares,setSquares] = useState(0);
    return(
        <>
            <div className="comparatorContainer">
                <div className="topContainer">
                    <button className="taskButton" onClick={""}>
                        Start Monitoring
                    </button>
                </div>
                <div className="topMediumContainer">
                    </div> 
                <div className="bottomContainer">
                <FileUploadButton handleFileUpload={handleFileUpload} />
                </div>
                <div className="squaresBox">
                    <p>Squares recovered: {squares}</p>
                </div>
            </div>
        </>
        );
}
}

export default ComparatorContainer;