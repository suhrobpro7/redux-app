import React, { useReducer, useEffect, useState } from "react";
import axios from 'axios';
import CourseList from "./CourseList";
import EnquiryForm from "./EnquiryForm";
import EnquiryList from "./EnquiryList";
import { enquireCourse, submitEnquiry } from './actions'; // Import the action creators


const initialState = {
  isEnquiring: false,
  selectedCourseId: null,
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
  const [showEnquiries, setShowEnquiries] = useState(false); // State to toggle enquiry list visibility

  // Fetch enquiries when component mounts or after submission
  useEffect(() => {
    axios.get('http://localhost:3001/enquiries')
      .then(response => setEnquiries(response.data))
      .catch(error => console.error('Error fetching enquiries:', error));
  }, []);

  const handleEnquire = (courseId) => {
    dispatch(enquireCourse(courseId)); // Dispatch the enquireCourse action
  };

  const handleSubmitEnquiry = () => {
    dispatch(submitEnquiry()); // Dispatch the submitEnquiry action

    // Fetch updated enquiries after a successful enquiry submission
    axios.get('http://localhost:3001/enquiries')
      .then(response => {
        setEnquiries(response.data);
        setShowEnquiries(true); // Show the enquiries list after submission
      })
      .catch(error => console.error('Error fetching updated enquiries:', error));
  };

  return (
    <div>
      <CourseList onEnquire={handleEnquire} />
      
      {state.isEnquiring && (
        <EnquiryForm courseId={state.selectedCourseId} onSubmit={handleSubmitEnquiry} />
      )}

      {showEnquiries && (  // Conditionally render EnquiryList based on showEnquiries state
        <div>
          <h2>Enquiries</h2>
          <EnquiryList enquiries={enquiries} />  {/* Pass updated enquiries */}
        </div>
      )}
    </div>
  );
};

export default App;
