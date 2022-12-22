import React, { useState } from "react";

const formData = {
  date: "04-06-2019",
  empId: "XP01",
  empName: "Naveen Singh",
  startDate: "20-01-2011",
  oldCTC: "Rs.50000",
  newCTC: "Rs.55000",
  designation: "Architect",
  hrName: "Naveen Singh",
  logoLink:
    "http://new.xpressogroup.com/wp-content/uploads/2022/11/xpressogroup-logo-new-2-e1669818388421.png",
  signLink: null,
};

const messages = {
  title: "Performance Appreciation and Salary Increment Letter",
};

const IncrementLetter = (props) => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <img height="45px" width="250px" alt="logo" src={formData.logoLink} />
        <p style={{ paddingLeft: "12px" }}>XpressoGroup</p>
        <a style={{ paddingLeft: "12px" }} href="www.xpressogroup.com">
          www.xpressogroup.com
        </a>
        <p style={{ paddingLeft: "12px" }}>
          <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
          {formData.date ? formData.date : "[Date]"}
        </p>
      </div>
      <div style={{ margin: "20px" }}>
        <p
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontWeight: "bolder",
            margin: "40px",
          }}
        >
          {messages.title}
        </p>
        <p style={{ paddingLeft: "12px" }}>
          Dear{" "}
          <span style={{ fontWeight: "bold" }}>
            {formData.empName ? formData.empName : "[Employee Name]"} -{" "}
            {formData.designation ? formData.designation : "[Designation]"}
          </span>
          ,
        </p>
        <p style={{ paddingLeft: "12px" }}>
          Consequent to the review of your performance, we are pleased to inform
          you that w.e.f.{" "}
          <span style={{ fontWeight: "bold" }}>
            {formData.startDate ? formData.startDate : "[Start Date]"}
          </span>{" "}
          your Compensation package will be revised from{" "}
          <span style={{ fontWeight: "bold" }}>
            {formData.oldCTC ? formData.oldCTC : "[Old CTC]"} to{" "}
          </span>
          <span style={{ fontWeight: "bold" }}>
            {formData.newCTC ? formData.newCTC : "[New CTC]"}.
          </span>{" "}
          Your past efforts and contributions have helped to maintain our
          present level of operations. Clearly, to keep up with the competition,
          more have to be done. You are therefore strongly urged to be
          relentless in efforts to improve on our service quality and
          productivity, through pro-actively learning new skills and accepting
          job enlargement.
        </p>
        <p style={{ paddingLeft: "12px" }}>
          Certainly look forward to your continued support and co-operation in
          maintaining our competitive edge in the difficult time ahead.
        </p>
        <p style={{ paddingLeft: "12px" }}>Best Wishes,</p>
      </div>
      <div
        style={{
          float: "left",
          margin: "50px 0px 0px 20px",
          fontWeight: "bold",
        }}
      >
        <p style={{ paddingLeft: "12px" }}>For XpressoGroup</p>
        <p style={{ paddingLeft: "12px" }}>{formData.hrName}</p>
        <p style={{ paddingLeft: "12px" }}>Manager - Human Resources</p>
      </div>
      <div
        style={{
          float: "right",
          margin: "50px 0px 0px 20px",
          fontWeight: "bold",
        }}
      >
        <p style={{ paddingLeft: "12px" }}>HR Signature</p>
        <p style={{ paddingLeft: "12px" }}></p>
        <p style={{ paddingLeft: "12px" }}></p>
      </div>
    </>
  );
};

export default IncrementLetter;
