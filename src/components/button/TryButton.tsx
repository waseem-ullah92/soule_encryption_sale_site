import React from 'react'

const TryButton = ({ fontSize,children, onClick, width, height,borderRadius, }:any) => {
    const buttonStyle = {
        // textTransform:"capitalize",
        cursor:"pointer",
        border:"none",
        fontSize: fontSize?fontSize:'16px',
        fontWeight: "600",
        background: "linear-gradient(95deg, #FF3B83 -0.35%, #FF3B83 106.83%)",
        borderRadius: borderRadius || "60px", // Note the lowercase 'px' here
        color: "#FFF",
        height: height || "50px", // Use the provided height or default to "50px"
        width: width || "173px", // Use the provided width or default to "173px",
        maxWidth:"100%",
        
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
        >
            {children}
        </button>
    );
};


export default TryButton