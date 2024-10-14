import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseList = ({ onEnquire }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={() => onEnquire(course.id)}>Enquire</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
