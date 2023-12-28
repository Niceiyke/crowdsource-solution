// src/components/QuestionsList.tsx
import React from "react";
import QuestionStatistics from "./QuestionStatistics";
import Asker from "./QuestionAsker";
import QuestionTags from "./QuestionTags";

import QuestionCard from "./QuestionCard";
import { formatDateTime, formatViews } from "../utils/Formater";

interface QuestionListProps {
  data: Question;
}

const QuestionsList: React.FC<QuestionListProps> = ({ data }) => {
  // Replace these values with your actual data
  const totalQuestions = '100';
  const totalAnswers = '250';
  const totalViews = '50000';


  const user = {
    avatar: "https://placekitten.com/40/40", // Replace with actual avatar URL
    username: "JohnDoe",
    reputation: 1000,
    duration: '3 hrs ago'
  };

  // Example question data
  const question = {
    title: "Sample Question Title",
    description: "Sample question description...",
    tags: ["react", "javascript", "web-development",],
  };

  return (
    <div className=" flex gap-2 items-center mt-4 border-2 p-4 md:p-0 border-gray-200">
      <section className=" md:w-1/6 shrink-0 ">
        <QuestionStatistics
          totalVotes={totalQuestions}
          totalAnswers={totalAnswers}
          totalViews={formatViews(totalViews)}
        />
      </section>
      <section className="">
        {/* Question component */}
        <section className=" mb-4">
          <QuestionCard title={data.title} description={data.description} />

          <section className="">
            {" "}
            <Asker
              avatar={`http://127.0.0.1:8000/${data.user.pix}`}
              username={data.user.username}
              reputation={user.reputation}
              duration={formatDateTime(data.created_at)}
            />

            <QuestionTags tags={question.tags} />


          </section>
        </section>
      </section>
    </div>
  );
};

export default QuestionsList;
