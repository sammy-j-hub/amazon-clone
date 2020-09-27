import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import "./Subheader.css";
function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader_locationIcon">
        <LocationOnIcon />
      </div>

      <div className="subheader_location">
        <span className="subheader_deliver">Deliver To</span>
        <span className="subheader_locationName">India </span>
      </div>

      <div className="subheader_options">
        <span className="subheader_optionOne">Today's Deal</span>
        <span className="subheader_optionTwo">Customer Service</span>
        <span className="subheader_optionThree">Gift Cards</span>
        <span className="subheader_optionFour">Sell</span>
      </div>
    </div>
  );
}

export default Subheader;
