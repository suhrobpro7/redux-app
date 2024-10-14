import React from "react";

const EnquiryList = ({ enquiries }) => {
  return (
    <div>
      <h1>Enquiries</h1>
      <ul>
        {enquiries.map(enquiry => (
          <li key={enquiry.id}>
            {enquiry.name} ({enquiry.email}): {enquiry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnquiryList;
