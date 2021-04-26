import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  customClasses,
  ...otherProps
}) => (
  <button
    className={` ${inverted && "inverted"} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button ${customClasses} `} 
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
