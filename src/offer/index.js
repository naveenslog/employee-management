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

const OfferLetter = (props) => {
  return (
    <div
      style={{
        margin: "20px",
        marginRight: "0",
        backgroundColor: "red",
        padding: "0px 12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left for content */}
        <div>
          <p>
            <strong>
              <span id="span_id_bus_name">Naveen Singh</span>
            </strong>{" "}
            <br />
            <span id="span_id_comp_name">Xpresso Group</span>
            <br />
            <span id="span_id_bus_address">
              Noida, Uttar Pradesh,
              <br />
              INDIA
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
            {formData.date ? formData.date : "[Date]"}
          </p>
          <p>
            <br />
            <strong>
              <span id="span_id_emp_firstname">Sumit Saurav</span>
            </strong>
            <br />
            <span id="span_id_emp_address">
              H.No. 90A, Chauhan Market,
              <br />
              Rawli Mahdood
              <br />
              Haridwar, Uttarakhand
            </span>
          </p>
          <p>
            <br />
            <br />
            Dear <span id="span_id_emp_firstname">Sumit Saurav</span>,
          </p>
          <p>
            <br />
            <br />
            <strong>Re: Offer of Employment</strong>
          </p>
        </div>
        {/* Right for logo */}
        <div>
          <img height="45px" width="250px" alt="logo" src={formData.logoLink} />
          {/* <p>XpressoGroup</p> */}
          {/* <a href="www.xpressogroup.com">
            www.xpressogroup.com
          </a> */}
        </div>
      </div>
      <div>
        <p>
          <br />
          <br />I am delighted to offer you employment on a part-time basis in
          the role of{" "}
          <span id="span_id_position_title" class="encours">
            <span class="variable_vide">________</span>
          </span>
          . It is intended for you to commence your employment on{" "}
          <span id="span_id_start_date" class="encours">
            <span class="variable_vide">________</span>
          </span>{" "}
          ("Commencement Date").
        </p>
      </div>
      <div>
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
        <p>
          Dear{" "}
          <span style={{ fontWeight: "bold" }}>
            {formData.empName ? formData.empName : "[Employee Name]"} -{" "}
            {formData.designation ? formData.designation : "[Designation]"}
          </span>
          ,
        </p>
        <p>
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
        <p>
          Certainly look forward to your continued support and co-operation in
          maintaining our competitive edge in the difficult time ahead.
        </p>
        <p>Best Wishes,</p>
      </div>
      <div
        style={{
          float: "left",
          margin: "50px 0px 0px 20px",
          fontWeight: "bold",
        }}
      >
        <p>For XpressoGroup</p>
        <p>{formData.hrName}</p>
        <p>Manager - Human Resources</p>
      </div>
      <div
        style={{
          float: "right",
          margin: "50px 0px 0px 20px",
          fontWeight: "bold",
        }}
      >
        <p>HR Signature</p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default OfferLetter;
