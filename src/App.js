import React, { useState } from "react";

export default function App() {
  const ref = React.createRef();
  const [formData, setFormData] = useState({
    empId: "null",
    empName: null,
    startDate: null,
    endDate: null,
    designation: null,
    hrName: "Naveen Singh",
    logoLink:
      "http://new.xpressogroup.com/wp-content/uploads/2022/11/xpressogroup-logo-new-2-e1669818388421.png",
    signLink: null
  });

  const form = () => {};

  return (
    <>
      <div className="App" ref={ref}>
        <div style={{ margin: "30px" }}>
          <img height="45px" width="250px" alt="logo" src={formData.logoLink} />
          <p style={{ paddingLeft: "12px" }}>XpressoGroup</p>
          <a style={{ paddingLeft: "12px" }} href="www.xpressogroup.com">
            www.xpressogroup.com
          </a>
        </div>
        <div style={{ margin: "20px" }}>
          <p
            style={{
              textAlign: "center",
              textDecoration: "underline",
              fontWeight: "bolder"
            }}
          >
            To Whom It May Concern
          </p>
          <p style={{ paddingLeft: "12px" }}>
            This is to certify that{" "}
            <span style={{ fontWeight: "bold" }}>
              {formData.empName ? formData.empName : "[Employee Name]"}{" "}
              {formData.empId ? formData.empId : "[Employee ID]"}
            </span>
            was employed in our organization for the period from{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {formData.startDate ? formData.startDate : "[Joining Date]"}
            </span>{" "}
            to
            <span style={{ fontWeight: "bold" }}>
              {formData.endDate ? formData.endDate : "[Relieving Date]"}.
            </span>{" "}
            He was relieved from the services of the organization at the close
            of business hours on{" "}
            <span style={{ fontWeight: "bold" }}>
              {formData.endDate ? formData.endDate : "[Relieving Date]"}.
            </span>
          </p>
          <p style={{ paddingLeft: "12px" }}>
            He was last designated as{" "}
            {formData.designation ? formData.designation : "[Designation]"} and
            all the dues are cleared by him.
          </p>
          <p style={{ paddingLeft: "12px" }}>
            We wish him all success in future endeavours.
          </p>
        </div>
        <div style={{ float: "left", margin: "50px 0px 0px 20px" }}>
          <p style={{ paddingLeft: "12px" }}>For XpressoGroup</p>
          <p style={{ paddingLeft: "12px" }}>{formData.hrName}</p>
          <p style={{ paddingLeft: "12px" }}>Manager - Human Resources</p>
        </div>
        <div style={{ float: "right", margin: "50px 0px 0px 20px" }}>
          <p style={{ paddingLeft: "12px" }}>HR Signature</p>
          <p style={{ paddingLeft: "12px" }}></p>
          <p style={{ paddingLeft: "12px" }}></p>
        </div>
      </div>
    </>
  );
}
