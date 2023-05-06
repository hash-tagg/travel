import React from 'react';
import { Link } from 'react-router-dom';

import profileImage from '../images/feature1.jpg';

function UserCard({ user }) {
  return (
    <div className="rounded-lg text-2xl text-bold capitalize text-blue-900">
      <Link to={`/profile`} className="flex items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full mx-4 my-4"
        />
        <span className="text-blue-500">
          {user.username}
        </span>
      </Link>
    </div>
  );
}

export default UserCard;
