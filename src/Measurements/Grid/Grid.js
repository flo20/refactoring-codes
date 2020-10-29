import React from "react";
import grid from "./Grid.module.css";

const Grid = ({children}) => {
    return <div className={grid.container}>{children}</div>;
};

export default Grid;
