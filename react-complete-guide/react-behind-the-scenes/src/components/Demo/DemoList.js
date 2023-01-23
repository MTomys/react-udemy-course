import React, { useMemo } from 'react';

const DemoList = (props) => {
  const { title, list } = props;

  const sortedList = useMemo(() => list.sort((a, b) => a - b), []);

  return (
    <>
      <div>{title}</div>
      <li>
        {sortedList.map((item) => (
          <ul>{item}</ul>
        ))}
      </li>
    </>
  );
};

export default DemoList;
