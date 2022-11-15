import React, { useState } from 'react';
import CourseGoal from './CourseGoal';

const CourseGoals = ({ goals }) => {
  return (
    <div>
      {goals.map((goal) => (
        <CourseGoal goalTitle={goal} />
      ))}
    </div>
  );
};

export default CourseGoals;
