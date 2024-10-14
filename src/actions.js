// Action Types
export const ENQUIRE = 'ENQUIRE';
export const SUBMIT_ENQUIRY = 'SUBMIT_ENQUIRY';

// Action Creators

// Action to handle enquiry start
export const enquireCourse = (courseId) => {
  return {
    type: ENQUIRE,
    payload: courseId,
  };
};

// Action to handle enquiry submission
export const submitEnquiry = () => {
  return {
    type: SUBMIT_ENQUIRY,
  };
};
