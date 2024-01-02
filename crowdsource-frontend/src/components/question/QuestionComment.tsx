// components/CommentSection.tsx
import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';

interface CommentSectionProps {
  onComment: (comment: string) => void;
  comments: string[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ onComment, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleComment = () => {
    const newComment = prompt('Enter your comment:');
    if (newComment) {
      onComment(newComment);
    }
  };

  return (
    <div className="mt-4">
      <button onClick={handleComment} className="mr-2 p-2 focus:outline-none">
        <FaComment />
      </button>

      {showComments && (
        <div>
          <h3 className="mb-2 text-xl font-bold">Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mb-1">{comment}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setShowComments(!showComments)}
        className="mt-2 p-2 text-blue-500 focus:outline-none"
      >
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </div>
  );
};

export default CommentSection;
