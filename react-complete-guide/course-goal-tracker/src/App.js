import CourseGoals from './components/CourseGoals';

import { useState } from 'react';
import NewCourseGoal from './components/NewCourseGoal';

function App() {
  const initialGoals = ['Do all excercises!', 'Finish the course!'];

  const [courseGoals, setCourseGoals] = useState(initialGoals);

  const onAddNewGoal = (newGoal) => {
    setCourseGoals((courseGoals) => [newGoal, ...courseGoals]);
  };

  return (
    <>
      <NewCourseGoal onAddNewGoal={onAddNewGoal} />
      <CourseGoals goals={courseGoals} />;
    </>
  );
}

export default App;
