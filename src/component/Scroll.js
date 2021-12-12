import React from "react";

const Scroll = (props) => {
    return (
        <React.StrictMode>
        <div style={{overflowY:'scroll',border:'5px solid black',height:'500px'}} >
          {props.children}
        </div>
      </React.StrictMode>
  )
};

export default Scroll;
