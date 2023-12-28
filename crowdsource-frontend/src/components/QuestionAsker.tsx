// src/components/User.tsx
import React from "react";

interface UserProps {
  avatar: string;
  username: string;
  reputation: number;
  duration: string
}

const Asker: React.FC<UserProps> = ({ avatar, username, reputation, duration }) => {
  return (
    <div className="flex items-center text-sm space-x-1 mt-2 mb-2">
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className="w-8 h-8 rounded-full mr-2"
      />

      <p className="font-bold">{username}</p>
      <p className="text-gray-600">{reputation}</p>
      <p className="text-gray-600">asked {duration}</p>
    </div>
  );
};

export default Asker;
