import React from "react";
import dayjs from "dayjs";
import morning from "./../../screenFirst/mainMorning.png";
import evening from "./../../screenFirst/mainEvening.jpg";
import afternoon from "./../../screenFirst/mainAfternoon.png";
import night from "./../../screenFirst/mainNight.jpg";

function homepopup() {
  // console.log(dayjs().format('h:mm A'))
  // declare variable for using purpose 
  const hour = dayjs().hour();
  // const min = dayjs().minute();
  // const month = dayjs().month();
  // const date = dayjs().date();
  // const day = dayjs().day();
  // const year = dayjs().year();

  let hoursInner = dayjs().format('h:mm A');
  let dateInner = dayjs().format('dddd, D MMMM YYYY');
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
        "Get the fuck up";
      valueGreeting.push(valueMassage);
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${valueBackgrounds})` }}
      className="just-greeting"
    >
      <div className="secTime">
        <span className="text-3xl font-bold underline">{hoursInner}</span>
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
    </div>
  );
}

export default homepopup;
