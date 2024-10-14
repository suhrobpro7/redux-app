import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App'; 
import axios from 'axios';

// Mock the CourseList and EnquiryForm components
jest.mock('../CourseList', () => ({ onEnquire }) => (
  <button onClick={() => onEnquire(1)}>Enquire</button>
));

jest.mock('../EnquiryForm', () => ({ onSubmit }) => (
  <button onClick={onSubmit}>Submit Enquiry</button>
));

// Mock axios
jest.mock('axios');

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows EnquiryForm when Enquire button is clicked', () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<App />);
    fireEvent.click(screen.getByText(/enquire/i));
    expect(screen.getByRole('button', { name: /submit enquiry/i })).toBeInTheDocument();
  });

});
