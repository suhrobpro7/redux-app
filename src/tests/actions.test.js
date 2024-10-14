import { enquireCourse, submitEnquiry, ENQUIRE, SUBMIT_ENQUIRY } from '../actions';

describe('Action Creators', () => {
  it('should create an action to enquire a course', () => {
    const courseId = 1;
    const expectedAction = {
      type: ENQUIRE,
      payload: courseId,
    };
    expect(enquireCourse(courseId)).toEqual(expectedAction);
  });

  it('should create an action to submit an enquiry', () => {
    const expectedAction = {
      type: SUBMIT_ENQUIRY,
    };
    expect(submitEnquiry()).toEqual(expectedAction);
  });
});
