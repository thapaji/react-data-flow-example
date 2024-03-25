import React from "react";

export const List = ({userList = []}) => {
//   const userList = ["Sujan", "Sachin", "Jatin"];
  return (
    <div>
      <ul>
        {userList.map((name, i) =>( 
          <li key={i}>{name}</li>
          ))}
      </ul>
    </div>
  );
};
