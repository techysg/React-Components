import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: "10px", margin: "5px" }}>
            {label}
        </button>
    );
};

export default Button;
