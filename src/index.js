import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "black"
};

const customStyleM = {
  color: "red"
};
const customStyleA = {
  color: "green"
};
const customStyleN = {
  color: "blue"
};

const whatTime = new Date().getHours();

console.log(whatTime);

if (whatTime > 12 && whatTime < 18) {
  customStyle = customStyleA;
} else if (whatTime > 18 && whatTime < 23) {
  customStyle = customStyleN;
} else if (whatTime > 01 && whatTime < 12) {
  customStyle = customStyleM;
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good Morning
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
