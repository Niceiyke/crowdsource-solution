// src/components/QuestionsList.tsx
import React from "react";
import QuestionStatistics from "./QuestionStatistics";
import QuestionTags from "./QuestionTags";
import QuestionCard from "./QuestionCard";
import { formatDateTime, formatViews } from "../../utils/Formater";
import UserCard from "../UserCard";
import { Link } from "react-router-dom";

interface QuestionListProps {
  data: Question;
}

const QuestionsList: React.FC<QuestionListProps> = ({ data }) => {
  // Replace these values with your actual data
  const totalQuestions = "100";
  const totalAnswers = "250";
  const totalViews = "50000";

  const user = {
    avatar: "https://placekitten.com/40/40", // Replace with actual avatar URL
    username: "JohnDoe",
    reputation: 1000,
    duration: "3 hrs ago",
  };

  // Example question data
  const question = {
    title: "Sample Question Title",
    description: "Sample question description...",
    tags: ["react", "javascript", "web-development"],
  };

  return (
    <Link to={data.id}>
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
            {" "}
            <UserCard
              avatar={data.user.profile_picture}
              username={data.user.username}
              action={"asked"}
              duration={data.created_at}
            />
            <QuestionCard
              id={data.id}
              title={data.title}
              description={data.description}
            />
            <QuestionTags tags={question.tags} />
          </section>
        </section>
      </div>
    </Link>
  );
};

export default QuestionsList;
