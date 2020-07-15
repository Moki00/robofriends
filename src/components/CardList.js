import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
<<<<<<< HEAD
=======

>>>>>>> 9ad731e410354a382fdcf37c58589014ae5a8842
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;