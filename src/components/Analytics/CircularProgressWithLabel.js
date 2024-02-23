import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function CircularProgressWithLabel(props) {
    const [showLabel, setShowLabel] = React.useState(false);
  
    const handleMouseEnter = () => {
      setShowLabel(true);
    };
  
    const handleMouseLeave = () => {
      setShowLabel(false);
    };
  
    return (
      <div>
        <CircularProgress
          variant="determinate"
          value={props.value}
          style={{ width: '200px', marginTop: '70px', marginLeft: '50px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showLabel && (
          <Typography variant="caption" component="div" color="text.secondary" style={{display: "flex", fontSize: "30px"}}>
            {`${showLabel ? props.value : ''}%`}
          </Typography>
        )}
      </div>
    );
  }
  
  export default CircularProgressWithLabel;