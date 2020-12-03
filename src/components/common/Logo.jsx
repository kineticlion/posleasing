import React from "react";
import logo from "../../logo.svg";
const Logo = ({ classes, styles }) => {
 return <img src={logo} alt='Logo' className={classes} style={{ ...styles }} />;
};

export default Logo;
