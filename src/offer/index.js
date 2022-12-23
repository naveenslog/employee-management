import React, { useState } from "react";

const formData = {
  employerName: null,
  issueDate: null,
  employeeId: "XP01",
  employeeName: null,
  employeeAddress: {
    streetName: null,
    cityName: null,
    stateCountryName: null,
  },
  employeeJobType: null,
  employeeJobTitle: null,
  employeeCommencementDate: null,
  employeeMajorTasks: null,
  employeeRemoteWork: {
    status: false,
    officeAddress: {
      companyName: "Xpresso Group",
      companyStreetCity: "Sector 128, Noida",
      companyStateCountry: "UP, India",
    },
  },
  employeeProbation: {
    status: true,
    duration: "3 months",
  },
  employeeSalary: "5,40,000",
  noticePeriod: "3 months",
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
  companyName: "Xpresso Group",
  letterSubject: "Re: Offer of Employment",
};

const OfferLetter = (props) => {
  return (
    <div
      style={{
        margin: "20px",
        marginRight: "0",
        padding: "0px 12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left for content */}
        <div>
          {/* Company Employer Data */}
          <p>
            <strong>
              <span id="span_id_bus_name">
                {formData.employerName
                  ? formData.employerName
                  : "[Employer Name]"}
              </span>
            </strong>{" "}
            <br />
            <span id="span_id_comp_name">{messages.companyName}</span>
            <br />
            <span id="span_id_bus_address">
              Noida, Uttar Pradesh,
              <br />
              India
            </span>
          </p>
          {/* Offer Letter Issuance Date */}
          <p>
            <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
            {formData.issueDate
              ? formData.issueDate
              : "[Offer Letter Issuance date]"}
          </p>
          {/* Employee Data */}
          <p>
            <br />
            <strong>
              <span id="span_id_emp_firstname">
                {formData.employeeName
                  ? formData.employeeName
                  : "[Employee Name]"}
              </span>
            </strong>
            <br />
            <span id="span_id_emp_address">
              {formData.employeeAddress.streetName
                ? formData.employeeAddress.streetName
                : "[Employee Street Name]"}
              <br />
              {formData.employeeAddress.cityName
                ? formData.employeeAddress.cityName
                : "[Employee Locality Name]"}
              <br />
              {formData.employeeAddress.stateCountryName
                ? formData.employeeAddress.stateCountryName
                : "[Employee State and Country Name]"}
            </span>
          </p>
          <p>
            <br />
            <br />
            Dear{" "}
            <span id="span_id_emp_firstname">
              <strong>
                {formData.employeeName
                  ? formData.employeeName
                  : "[Employee Name]"}
              </strong>
            </span>
            ,
          </p>
          <p>
            <br />
            <br />
            <strong>{messages.letterSubject}</strong>
          </p>
        </div>
        {/* Right for logo */}
        <div style={{ textAlign: "center" }}>
          <img height="45px" width="250px" alt="logo" src={formData.logoLink} />
          <p><b>XpressoGroup</b></p>
          <div style={{}}>
            <a href="www.xpressogroup.com">www.xpressogroup.com</a>
          </div>
        </div>
      </div>
      {/* Offer Letter Written Content */}
      <div>
        <p>
          <br />
          <br />I am delighted to offer you employment on a{" "}
          <span id="span_id_emp_firstname">
            <strong>
              {formData.employeeJobType
                ? formData.employeeJobType
                : "[Employee Job Type]"}
            </strong>
          </span>{" "}
          basis in the role of{" "}
          <span id="span_id_position_title">
            <span>
              <strong>
                {formData.employeeJobTitle
                  ? formData.employeeJobTitle
                  : "[Employee Job Title]"}
              </strong>
            </span>
          </span>
          . It is intended for you to commence your employment on{" "}
          <span>
            <strong>
              {formData.employeeCommencementDate
                ? formData.employeeCommencementDate
                : "[Employee Commencement  Date]"}
            </strong>{" "}
          </span>{" "}
          ("Commencement Date").
        </p>
        <p>
          Please read this letter carefully and indicate your acceptance of the
          offer by signing and returning a copy of this letter.
        </p>
        <ol>
          <li>
            <strong>Your Position</strong>
            <p>
              You will be employed on the terms and conditions in this
              agreement, in the role of:{" "}
              <span>
                <strong>
                  {formData.employeeJobTitle
                    ? formData.employeeJobTitle
                    : "[Employee Job Title]"}
                </strong>{" "}
              </span>{" "}
            </p>
            <p>
              In addition to any duties allocated by the Employer from time to
              time, your position will involve the duties set out below:
            </p>
            <p style={{ paddingLeft: "30px" }}>
              {formData.employeeMajorTasks
                ? formData.employeeMajorTasks.map((item) => (
                    <li>
                      <span>{item}</span>{" "}
                    </li>
                  ))
                : "[Employee Major Tasks]"}
            </p>
          </li>
          <li>
            <strong>Location</strong>
            <span>
              {formData.employeeRemoteWork.status ? (
                <p>
                  Your duties may be performed from such location as you see
                  fit, although we may direct you to work from specific
                  locations.
                </p>
              ) : (
                <div>
                  <p>
                    You will be based at the address shown below, although we
                    may direct you to work at different locations from time to
                    time:
                  </p>
                  <p style={{ paddingLeft: "30px" }}>
                    <span>
                      {formData.employeeRemoteWork.officeAddress.companyName
                        ? formData.employeeRemoteWork.officeAddress.companyName
                        : "[Company Name]"}
                    </span>
                    <br />
                    <span>
                      {formData.employeeRemoteWork.officeAddress
                        .companyStreetCity
                        ? formData.employeeRemoteWork.officeAddress
                            .companyStreetCity
                        : "[Company Name]"}
                    </span>
                    <br />
                    <span>
                      {formData.employeeRemoteWork.officeAddress
                        .companyStateCountry
                        ? formData.employeeRemoteWork.officeAddress
                            .companyStateCountry
                        : "[Company Name]"}
                    </span>
                    <br />
                  </p>
                </div>
              )}
            </span>{" "}
          </li>
          {formData.employeeProbation.status ? (
            <li>
              <strong>Probationary Period</strong>
              <p>
                Your employment is subject to the satisfactory completion of a
                probationary period of{" "}
                <span>{formData.employeeProbation.duration}</span>.{" "}
              </p>
              <p>
                The probationary period is designed to grant the Employer time
                to assess whether you are able to fulfil your role with the
                Employer. During the probationary period, your employment may be
                terminated by either you or the Employer upon providing 1-week
                written notice (or payment in lieu of that notice).
              </p>
            </li>
          ) : null}
          <li>
            <strong>Hours of Work</strong>
            <p>
              (a) As a full-time employee, you will be required to devote
              substantially the whole of your time and attention during the
              Employer's ordinary business hours to the performance of your
              duties under this agreement.
            </p>
            <p>
              (b) You will not be entitled to receive any remuneration for work
              performed outside the hours referred to in sub-clause (a) above.
            </p>
          </li>
          <li>
            <strong>Salary and Benefits</strong>
            <p>
              (a) Your annual salary will be Rs.{" "}
              <span>
                <strong>
                  {formData.employeeSalary
                    ? formData.employeeSalary
                    : "[Employee Annual Salary in Rs.]"}
                </strong>
              </span>
            </p>
            <p>
              (b) This salary will be paid by monthly in the following manner:
              deposit into nominated account.{" "}
            </p>
            <p>
              <span>
                (c) The above-mentioned salary is the total cost to the company
                and includes all payments made and benefits provided by the
                Employer directly or indirectly to or on your behalf, whether as
                salary or otherwise.
              </span>
            </p>
          </li>
          <li>
            <strong>Confidentiality and Intellectual Property</strong>
            <p>
              (a) You agree that you will not divulge any of the confidential
              information or trade secrets of the Employer to any person,
              whether during or after the termination of your employment.
            </p>
          </li>
          <li>
            <strong>Termination</strong>
            <p>
              (a) During your employment, either party may terminate this
              agreement by providing written notice of{" "}
              <span>
                <strong>
                  {formData.noticePeriod
                    ? formData.noticePeriod
                    : "[Notice Period]"}
                </strong>
              </span>{" "}
              (or payment in lieu of notice) to the other party.
            </p>
            <p>
              (b) Notwithstanding sub-clause (a) above, the Employer may
              terminate this agreement by notice effective immediately without
              payment (except salary accrued to the date of termination) where
              you have committed an act of wilful or serious misconduct, are
              significantly neglectful of your duties, or you are in breach of
              this agreement.
            </p>
          </li>
          <li>
            <strong>Acceptance</strong>
            <p>
              This Letter of Offer contains the proposed Terms and Conditions of
              your employment with the Employer and is subject to the
              preparation and execution of a formal Contract of Employment.
            </p>
          </li>
        </ol>
        <p>
          <br />
          Yours sincerely,
        </p>
        <p>
          <br />
          <br />
          <br />
          <span>
            {formData.employerName ? formData.employerName : "[Employer Name]"}
          </span>
          <br />
          <span>
            {formData.companyName ? formData.companyName : "[Company Name]"}
          </span>
        </p>
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          I,{" "}
          <strong>
            <span>
              {formData.employeeName
                ? formData.employeeName
                : "[Employee Name]"}
            </span>
          </strong>
          , accept and agree to the proposed terms of employment and request
          that the Employer prepare a formal contract of employment for
          execution.
        </p>
        <p>
          <br />
          <br />
          ________________________
        </p>
        <p>Signature</p>
        <p>
          <br />
          ________________________
        </p>
        <p>Date</p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default OfferLetter;
