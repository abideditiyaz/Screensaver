import React from "react";
import morning from "./../../screenFirst/mainMorning.png";
import evening from "./../../screenFirst/mainEvening.jpg";
import afternoon from "./../../screenFirst/mainAfternoon.png";
import night from "./../../screenFirst/mainNight.jpg";

function Dateformat() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedneyday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const D = new Date();
  const day = days[D.getDay()];
  const date = D.getDate();
  const month = months[D.getMonth()];
  const year = D.getFullYear();
  let hour = D.getHours();
  let min = D.getMinutes();

  let hoursInner = `${hour} : ${min}`;
  let dateInner = `${day}, ${date} ${month} ${year}`;
  let valueGreeting = [];
  let valueBackgrounds = [];
  if (hour <= 13) {
    valueBackgrounds.push(morning);
  } else if (hour > 13 && hour <= 17) {
    valueBackgrounds.push(afternoon);
  } else if (hour > 17 && hour <= 23) {
    valueBackgrounds.push(evening);
  } else {
    valueBackgrounds.push(night);
  }

  function GreetingMessage() {
    if (hour >= 5 && hour < 11) {
      //This is morning sign
      let valueMassage = "Get the fuck it out from your smelly bed";
      valueGreeting.push(valueMassage);
    } else if (hour >= 11 && hour < 13) {
      //this is a lunch sign
      let valueMassage = "Time for lunch";
      valueGreeting.push(valueMassage);
    } else if (hour >= 13 && hour < 17) {
      // afternoon sign
      let valueMassage = "It's a Hot day right";
      valueGreeting.push(valueMassage);
    } else if (hour >= 17 && hour < 22) {
      //this is evening sign
      let valueMassage = "Prepare for go Home";
      valueGreeting.push(valueMassage);
    } else {
      //this is night sign
      let valueMassage =
        "It's already dark now, you should take a rest for beautiful tomorrow";
      valueGreeting.push(valueMassage);
    }
  }

  function gone1() {
    document.querySelector(".just-greeting").style.transform = "scale(0)";
  }
  return (
    <div
      style={{ backgroundImage: `url(${valueBackgrounds})` }}
      className="just-greeting"
    >
      <div className="secTime">
        <span className="hours">{hoursInner}</span>
        <span className="time">{dateInner}</span>
      </div>
      <div className="hero-section">
        <div className="container-greeting">
          <span onLoad={GreetingMessage()}>{valueGreeting}</span>
        </div>
        <div className="caption">
          <p></p>
        </div>
        <div className="container-suggest">
          <span></span>
        </div>
      </div>
      <div className="instruction-section">
        <i onClick={gone1} className="material-icons">
          fullscreen_exit
        </i>
        <span className="time">Click Icon or Swipe Up to continue</span>
      </div>
    </div>
  );
}

export default Dateformat;
