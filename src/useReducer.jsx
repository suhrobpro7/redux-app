import React, { useReducer, useState } from "react";
import CourseList from "./CourseList";
import EnquiryForm from "./EnquiryForm";

const initialState = {
  isEnquiring: false,
  selectedCourseId: null,
  enquiries: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ENQUIRE':
      return { ...state, isEnquiring: true, selectedCourseId: action.payload };
    case 'SUBMIT_ENQUIRY':
      return { ...state, isEnquiring: false, selectedCourseId: null };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [enquiries, setEnquiries] = useState([]);

  const handleEnquire = (courseId) => {
    dispatch({ type: 'ENQUIRE', payload: courseId });
  };

  const handleSubmitEnquiry = () => {
    dispatch({ type: 'SUBMIT_ENQUIRY' });

    // Fetch updated enquiries from JSON server
    axios.get('http://localhost:3001/enquiries')
      .then(response => setEnquiries(response.data))
      .catch(error => console.error('Error fetching enquiries:', error));
  };

  return (
    <div>
      <CourseList onEnquire={handleEnquire} />
      
      {state.isEnquiring && (
        <EnquiryForm courseId={state.selectedCourseId} onSubmit={handleSubmitEnquiry} />
      )}

      <ul>
        {enquiries.map(enquiry => (
          <li key={enquiry.id}>
            {enquiry.name} - {enquiry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
