import React from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
export default function PilotContainer() {
    return (
        <div className="PilotCards-container">
            <div className="PilotCard-Left">
                <CameraProp id={'cameraOne'} cameraId="https://media.licdn.com/dms/image/C560BAQHa-NmHIY2klw/company-logo_200_200/0/1669907055690?e=1678924800&v=beta&t=30Yy3uCLYHouQyxB20vWQxohbSWWqaN0vK_YCxF-F3g" />
            </div>
            <div className="PilotCard-Right">
                <h1>Navigation</h1>
            </div>
        </div>
    );

}
