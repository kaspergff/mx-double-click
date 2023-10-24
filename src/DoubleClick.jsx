import "./ui/DoubleClick.css";

import React from "react";

function DoubleClick(props) {
  const { showPointer, dblClickAction, children } = props;

  const onDoubleClick = () => {
    if (dblClickAction && dblClickAction.canExecute) {
      dblClickAction.execute();
    }
  };

  const classes = showPointer ? "widget-doubleclick-clickable" : "";

  return (
    <div className={classes} onDoubleClick={onDoubleClick}>
      {children}
    </div>
  );
}

export default DoubleClick;

