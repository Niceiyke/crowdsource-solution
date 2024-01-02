// src/components/User.tsx
import React from "react";
import { formatDateTime } from "../utils/Formater";

interface UserProps {
  avatar: string;
  username: string;
  action: string;
  duration: string
}

const UserCard: React.FC<UserProps> = ({ avatar, username, action, duration }) => {
  return (
    <div className="flex items-center text-sm space-x-1 mt-2 mb-2">
      <img
        src={`http://127.0.0.1:8000/${avatar}`}
        alt={`${username}'s avatar`}
        className="w-8 h-8 rounded-full mr-2"
      />

      <p className="font-bold">{username}</p>
     
      <p className="text-gray-600"> {action} {formatDateTime(duration)}</p>
    </div>
  );
};

export default UserCard;
