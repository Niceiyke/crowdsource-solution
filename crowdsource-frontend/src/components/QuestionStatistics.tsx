// src/components/QuestionStatistics.tsx
import React from 'react';

interface QuestionStatisticsProps {
  totalVotes: number;
  totalAnswers: number;
  totalViews: number;
}

const QuestionStatistics: React.FC<QuestionStatisticsProps> = ({
  totalVotes,
  totalAnswers,
  totalViews,
}) => {
  return (
  
      <div className="hidden md:flex flex-col p-2 text-sm">
        <div>
          <p className="text-gray-600">{totalVotes} Votes</p>
        </div>
        <div>

          <p className="text-gray-600">{totalAnswers} answers</p>
        </div>
        <div>
          <p className="text-gray-600">{totalViews} views</p>
        </div>
      </div>
 
  );
};

export default QuestionStatistics;
