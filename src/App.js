import React, { useState } from "react";
import RelievingLetter from "./relieving";
import Increment from "./increment";
import OfferLetter from "./offer";

export default function App() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Relieving Letter",
      title: "Relieving Letter",
      content: <RelievingLetter />,
    },
    {
      id: 2,
      tabTitle: "Increment Letter",
      title: "Increment Letter",
      content: <Increment />,
    },
    {
      id: 3,
      tabTitle: "Offer Letter",
      title: "Offer Letter",
      content: <OfferLetter />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "#515964",
          width: "100%",
          padding: "0px 10px",
          display: "flex",
          height: "50px",
          alignItems: "flex-end",
        }}
      >
        {tabs.map((tab, i) => (
          <div style={{ width: "33.33%" }}>
            <button
              key={i}
              style={
                currentTab == tab.id
                  ? {
                      border: "none",
                      backgroundColor: "white",
                      width: "100%",
                      height: "45px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }
                  : {
                      border: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      width: "100%",
                      height: "50px",
                    }
              }
              id={tab.id}
              // disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          </div>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <div>{tab.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    // <div >
    //   <Increment />
    // </div>
  );
}
