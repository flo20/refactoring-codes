import React from 'react';
import mainbody from "./MainBody.module.css"

const MainBody = ({children}) => {
    return (
        <div className={mainbody.divStyle}>
            {children}
        </div>
    );
}

export default MainBody;
