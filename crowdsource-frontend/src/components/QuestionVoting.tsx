// components/Voting.tsx
import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

interface VotingProps {
  votes: number;
  onVote: (type: 'upvote' | 'downvote') => void;
}

const Voting: React.FC<VotingProps> = ({ votes, onVote }) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const handleVote = (type: 'upvote' | 'downvote') => {
    onVote(type);

    if (type === 'upvote') {
      setIsUpvoted(!isUpvoted);
      setIsDownvoted(false);
    } else if (type === 'downvote') {
      setIsDownvoted(!isDownvoted);
      setIsUpvoted(false);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => handleVote('upvote')}
        className={`mr-2 p-2 focus:outline-none ${isUpvoted ? 'text-green-500' : 'text-black'}`}
      >
        <FaThumbsUp />
      </button>
      <span className="mr-2">{votes}</span>
      <button
        onClick={() => handleVote('downvote')}
        className={`p-2 focus:outline-none ${isDownvoted ? 'text-red-500' : 'text-black'}`}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default Voting;
