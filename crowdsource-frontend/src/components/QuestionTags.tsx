// src/components/QuestionTags.tsx
import React from 'react';

interface QuestionTagsProps {
  tags: string[];
}

const QuestionTags: React.FC<QuestionTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap space-x-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-100 text-sm text-blue-500 px-2 py-1  rounded-md">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default QuestionTags;
