import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
  {
    target: ".tour-logo",
    content: "This is the App logo, You can always click here to go home",
  },
  {
    target: ".tour-diary",
    content: "This is the Diary Nav, Click to view All Diaries Created",
  },
  {
    target: ".tour-create",
    content: "Clich here to Create New Diaries",
  },
  {
    target: ".tour-favourite",
    content: "Click here to view All your favourite diary list",
  },
  {
    target: ".tour-out",
    content: "Click here to log out from your Account",
  },
];

const Tour = () => {
  return (
    <div>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          buttonNext: {
            backgroundColor: "orange",
          },
          buttonBack: {
            marginRight: 10,
          },
        }}
      />
    </div>
  );
};

export default Tour;
