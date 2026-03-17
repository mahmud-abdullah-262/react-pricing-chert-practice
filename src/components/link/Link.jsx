import React from 'react';

const Link = ({route}) => {
  return (
    <li className='btn btn-primary'><a href={route.path}>{route.name}</a></li>
  );
};

export default Link;{}