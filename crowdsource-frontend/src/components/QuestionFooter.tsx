// components/UpvoteDownvoteComment.tsx
import React, { useState } from 'react';
import Voting from './QuestionVoting';
import CommentSection from './QuestionComment';
import { FaComment, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import IconButton from './IconButton';


const QuestionFooter: React.FC = () => {
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);

  const handleVote = (type: 'upvote' | 'downvote') => {
    setVotes((prevVotes) => (type === 'upvote' ? prevVotes + 1 : prevVotes - 1));
  };

  const handleComment = (newComment: string) => {
    setComments([...comments, newComment]);
  };
  const vote= ()=>{}

  return (
    <div className="flex p-2 shadow-lg mt-2">
        <IconButton icon={<FaThumbsUp/>} onClick={vote} color='text-green-700'/>
        <IconButton icon={<FaThumbsDown/>} onClick={vote} color='text-red-600'/>
        <IconButton icon={<FaComment/>} onClick={vote} color='text-green-700'/>
       

    </div>
  );
};

export default QuestionFooter;
